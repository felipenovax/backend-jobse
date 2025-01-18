import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Service extends Model {
  public id!: string;
  public name!: string;
}

Service.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'services',
    timestamps: true,
  },
);

export default Service;
