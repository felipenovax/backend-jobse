import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Professional extends Model {
  public id!: string;
  public fullName!: string;
  public companyName!: string | null;
  public address!: string;
  public portfolioPhotos!: string[]; // URLs das fotos nao sei como seria de outra forma
  public rating!: number;
}

Professional.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    portfolioPhotos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'professionals',
    timestamps: true,
  },
);

export default Professional;
