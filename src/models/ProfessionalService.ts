import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class ProfessionalService extends Model {
  public professionalId!: string;
  public serviceId!: string;
}

ProfessionalService.init(
  {
    professionalId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    serviceId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'professional_services',
    timestamps: false,
  },
);

export default ProfessionalService;
