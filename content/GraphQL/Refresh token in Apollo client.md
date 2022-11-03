If your GraphQL api needs token refresh option, you can pass custom fetch function for Apollo Client.

```typescript
export const createApolloClient = (
  url: string,
  logout: () => void,
  getAuthorizationData: () => { authorization: string },
  refreshToken: () => Promise<
    { accessToken: string; refreshToken: string } | undefined
  >,
) =>
  new ApolloClientBase({
    // ...other options
    link: ApolloLink.from([
      // ...other options
      setContext(async (_, { headers }) => {
        return {
          headers: {
            ...headers,
            ...getAuthorizationData(),
          },
        };
      }),
      new HttpLink({
        uri: url,
        fetch: fetchWithTokenRefresh(logout, refreshToken),
      }),
    ]),
  });
```

Custom fetch function for this request. You should tune `hasUnauthorizedError` and 
`isRefreshRequestOptions` to match your api.

```typescript
/** Global singleton for refreshing promise */
let refreshingPromise: Promise<string> | null = null;

/** Checks if GraphQl errors has unauthenticated error */
const hasUnauthorizedError = (errors: Array<{ code?: ErrorCode }>): boolean =>
  Array.isArray(errors) &&
  errors.some(error => {
    return error.status === 401; // Distinguish unauthorized error here
  });

/** Detects if customFetch is sending refresh request */
const isRefreshRequestOptions = (options: RequestInit) => {
  try {
    const body = JSON.parse(options?.body as string);
    return body.operationName === 'RefreshToken';
  } catch (e) {
    return false;
  }
};

/** fetchWithTokenRefresh is a custom fetch function with token refresh for apollo */
export const fetchWithTokenRefresh =
  (
    logout: () => void,
    refreshToken: () => Promise<
      { accessToken: string; refreshToken: string } | undefined
    >,
  ) =>
  async (uri: string, options: RequestInit): Promise<Response> => {
    // already refreshing token, wait for it and then use refreshed token
    // or use empty authorization if refreshing failed
    if (
      !isRefreshRequestOptions(options) &&
      refreshingPromise &&
      (options.headers as Record<string, string>)?.authorization
    ) {
      const newAccessToken = await refreshingPromise
        .catch(() => {
          // refreshing token from other request failed, retry without authorization
          return '';
        });
      
      options.headers = {
        ...(options.headers || {}),
        authorization: newAccessToken,
      };
    }

    return fetch(uri, options).then(async response => {
      const text = await response.text();
      const json = JSON.parse(text);

      // check for unauthorized errors, if not present, just return result
      if (
        isRefreshRequestOptions(options) ||
        !json?.errors ||
        !Array.isArray(json.errors) ||
        !hasUnauthorizedError(json.errors)
      ) {
        return {
          ...response,
          ok: true,
          json: async () =>
            new Promise<unknown>(resolve => {
              resolve(json);
            }),
          text: async () =>
            new Promise<string>(resolve => {
              resolve(text);
            }),
        };
      }

      // If unauthorized, refresh token and try again
      if (!refreshingPromise) {
        refreshingPromise = refreshToken()
          .then(async (tokens): Promise<string> => {
            refreshingPromise = null;

            if (!tokens?.accessToken) {
              throw new Error('Session expired');
            }

            return tokens?.accessToken;
          })
          .catch(() => {
            refreshingPromise = null;

            // can't refresh token. logging out
            logout();
            throw new Error('Session expired');
          });
      }

      // success or any non-auth error
      return refreshingPromise
        .then(async (newAccessToken: string) => {
          // wait for other request's refreshing query to finish, when retry

          return fetch(uri, {
            ...options,
            headers: {
              ...(options.headers || {}),
              authorization: newAccessToken,
            },
          });
        })
        .catch(async () => {
          // refreshing token from other request failed, retry without authorization

          return fetch(uri, {
            ...options,
            headers: {
              ...(options.headers || {}),
              authorization: '',
            },
          });
        });
    });
  };

```