import { Router } from 'express';
import {
  userSignUp,
  userSignIn,
  userSignOut,
  googleSignIn,
} from '../controllers/AuthController';

const router = Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);
router.post('/sign-out', userSignOut);
router.get('/google-sign-in', googleSignIn);

export default router;
