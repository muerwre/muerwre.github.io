Use #oauth2 login with React-Native

## Common OAuth2 providers

Can be handled by [react-native-app-auth](react-native-app-auth) by redirecting to url `com.yourapp://oauth2provider`. 

### Example for #Google

```typescript
import { authorize } from 'react-native-app-auth';

const GOOGLE_OAUTH_CLIENT = '...';

// ...
const authState = await authorize({
  issuer: 'https://accounts.google.com',
  clientId: `${GOOGLE_OAUTH_CLIENT}.apps.googleusercontent.com`,
  redirectUrl: `com.yourapp:/oauth2redirect/google`,
  scopes: ['openid', 'profile'],
  dangerouslyAllowInsecureHttpRequests: true,
});
```

### Example for #Yandex

```typescript
const YANDEX_OAUTH_CLIENT = '...';
const YANDEX_OAUTH_SECRET = '...'; // better hide it somehow
const APP_ID = 'com.yourapp';

const authState = await authorize({
  serviceConfiguration: {
    authorizationEndpoint: `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_OAUTH_CLIENT}&redirect_uri=${APP_ID}:/oauth2redirect`,
    // TODO: replace it with your own backend to secure client_secret:
    tokenEndpoint: `https://oauth.yandex.ru/token?grant_type=authorization_code&client_id=${YANDEX_OAUTH_CLIENT}&client_secret=${YANDEX_OAUTH_SECRET}`,
  },
  clientId: YANDEX_OAUTH_CLIENT,
  redirectUrl: `${APP_ID}:/oauth2redirect`,
  scopes: ['login:info', 'login:avatar'],
  dangerouslyAllowInsecureHttpRequests: true,
});

callback(authState.accessToken);
```

## Apple ID login

[react-native-apple-authentication](https://github.com/invertase/react-native-apple-authentication) has its own [documentation](https://github.com/invertase/react-native-apple-authentication/tree/main/docs) on setting up OAuth using Apple ID.