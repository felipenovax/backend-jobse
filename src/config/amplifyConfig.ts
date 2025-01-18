import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_CLIENT_ID,
    identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
    oauth: {
      domain: process.env.AWS_OAUTH_DOMAIN,
      scope: ['email', 'openid', 'profile'],
      redirectSignIn: process.env.AWS_REDIRECT_SIGN_IN,
      redirectSignOut: process.env.AWS_REDIRECT_SIGN_OUT,
      responseType: 'code',
    },
  },
});
