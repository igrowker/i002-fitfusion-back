import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Rol from './Rol.js';
//
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
  },
  Type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
  },
  Residence: {
    type: DataTypes.STRING(100),
  },
  PhysicalCondition: {
    type: DataTypes.STRING(255),
  },
  ActivityLevel: {
    type: DataTypes.STRING(50),
  },
  Weight: {
    type: DataTypes.DECIMAL(5, 2),
  },
  Height: {
    type: DataTypes.DECIMAL(5, 2),
  },
  Goals: {
    type: DataTypes.TEXT,
  },
  Preferences: {
    type: DataTypes.TEXT,
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: false,
});

User.belongsTo(Rol, { foreignKey: 'RolId' });

export default User;
