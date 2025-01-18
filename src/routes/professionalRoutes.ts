import { Router } from 'express';
import {
  createProfessional,
  assignServiceToProfessional,
} from '../controllers/ProfessionalController';

const router = Router();

router.post('/', createProfessional);
router.post('/assign-service', assignServiceToProfessional);

export default router;
