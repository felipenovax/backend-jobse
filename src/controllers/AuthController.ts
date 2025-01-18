import { Request, Response } from 'express';
import { signUp, signIn, signOut, socialSignIn } from '../services/authService';

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { email, password, fullName } = req.body;
    const result = await signUp(email, password, fullName);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during sign-up', error });
  }
};

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await signIn(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during sign-in', error });
  }
};

export const userSignOut = async (_req: Request, res: Response) => {
  try {
    await signOut();
    res.status(200).json({ message: 'Signed out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during sign-out', error });
  }
};

export const googleSignIn = async (_req: Request, res: Response) => {
  try {
    const result = await socialSignIn('Google');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during Google sign-in', error });
  }
};
