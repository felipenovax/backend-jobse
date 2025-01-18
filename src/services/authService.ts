import { Auth } from 'aws-amplify';

export const signUp = async (
  email: string,
  password: string,
  fullName: string,
) => {
  return await Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
      name: fullName,
    },
  });
};

export const signIn = async (email: string, password: string) => {
  return await Auth.signIn(email, password);
};

export const signOut = async () => {
  return await Auth.signOut();
};

export const socialSignIn = async (provider: 'Google') => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: { provider: any } = { provider };
  return await Auth.federatedSignIn(options);
};
