import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const StatusClass = sequelize.define('StatusClass', {
    StatusId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Description: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
  timestamps: false
});

export default StatusClass;
