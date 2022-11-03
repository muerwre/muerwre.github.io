`<ApiProvider />` component, that will handle token refresh if needed. Refresh function should, probably, be passed through component props.

```typescript
import axios from "axios";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

interface APIProviderProps extends PropsWithChildren {
  tokens: {
    access: string;
    refresh: string;
  };
  logout: () => void;
}

const APIContext = createContext({
  client: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  }),
});

const APIProvider: FC<APIProviderProps> = ({ 
	tokens, 
	logout, 
	children,
}) => {
  const client = useRef(
    axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    })
  ).current;

  const refreshTokens = useCallback<() => string>(() => {
    // TODO: implement me
    throw new Error("not implemented");
  }, []);

  useEffect(() => {
    if (!tokens.access) {
      return;
    }

    // append `access` token to all requests
    const req = client.interceptors.request.use(
      async (config) => {
        config.headers = {
          Authorization: `Bearer ${tokens.access}`,
        };
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // refreshing interceptor
    const resp = client.interceptors.response.use(
      (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          const newToken = refreshTokens;

          return axios({
            ...originalRequest,
            headers: {
              ...originalRequest.headers,
              Authorization: "Bearer " + newToken,
            },
          });
        }

        logout();
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(req);
      axios.interceptors.request.eject(resp);
    };
  }, [client, tokens.access, tokens.refresh, refreshTokens, logout]);

  return (
    <APIContext.Provider value={{ client }}>
	    {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => useContext(APIContext).client;

export { APIProvider };
```