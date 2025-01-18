import User from './User';
import Professional from './Professional';
import Service from './Service';
import Order from './Order';
import ProfessionalService from './ProfessionalService';

// relacionamentos
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Professional.hasMany(Order, { foreignKey: 'professionalId' });
Order.belongsTo(Professional, { foreignKey: 'professionalId' });

Service.hasMany(Order, { foreignKey: 'serviceId' });
Order.belongsTo(Service, { foreignKey: 'serviceId' });

Professional.belongsToMany(Service, { through: ProfessionalService });
Service.belongsToMany(Professional, { through: ProfessionalService });
