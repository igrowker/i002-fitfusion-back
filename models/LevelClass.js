import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const LevelClass = sequelize.define('LevelClass', {
    LevelClassId: {
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

export default LevelClass;
