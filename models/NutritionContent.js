import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const NutritionContent = sequelize.define('NutritionContent', {
    ContentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT
    },
    AccessDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
  timestamps: false
});

export default NutritionContent;
