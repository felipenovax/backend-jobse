import { Request, Response } from 'express';
import Professional from '../models/Professional';
import ProfessionalService from '../models/ProfessionalService';

export const createProfessional = async (req: Request, res: Response) => {
  try {
    const { fullName, companyName, address, portfolioPhotos } = req.body;
    const professional = await Professional.create({
      fullName,
      companyName,
      address,
      portfolioPhotos,
    });
    res.status(201).json(professional);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating professional' });
  }
};

export const assignServiceToProfessional = async (
  req: Request,
  res: Response,
) => {
  try {
    const { professionalId, serviceId } = req.body;
    await ProfessionalService.create({ professionalId, serviceId });
    res.status(201).json({ message: 'Service assigned to professional' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error assigning service' });
  }
};
