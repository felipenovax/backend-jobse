import { Router } from 'express';
import userRoutes from './userRoutes';
import professionalRoutes from './professionalRoutes';
import orderRoutes from './orderRoutes';
import authRoutes from './authRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/professionals', professionalRoutes);
router.use('/orders', orderRoutes);

export default router;
