import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Rol from './Rol.js';



const User = sequelize.define('User', {
  UserId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  RolId: {
    type: DataTypes.INTEGER,
    references: {
      model: Rol,
      key: 'RolId',
    },
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: true, // Edad puede ser null
  },
  Residence: {
    type: DataTypes.STRING(100),
    allowNull: true, // Residencia puede ser null
  },
  PhysicalCondition: {
    type: DataTypes.STRING(255),
    allowNull: true, // Condición física puede ser null
  },
  ActivityLevel: {
    type: DataTypes.STRING(50),
    allowNull: true, // Nivel de actividad puede ser null
  },
  Weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true, // Peso puede ser null
  },
  Height: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true, // Altura puede ser null
  },
  Goals: {
    type: DataTypes.TEXT,
    allowNull: true, // Metas pueden ser null
  },
  Preferences: {
    type: DataTypes.TEXT,
    allowNull: true, // Preferencias pueden ser null
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  Image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Calories: {
    type: DataTypes.INTEGER
  },
}, {
  timestamps: false,
});

User.belongsTo(Rol, { foreignKey: 'RolId' });




export default User;

