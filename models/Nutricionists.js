import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Nutricionists = sequelize.define('Nutricionists', {
    NutricionistsId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    FullName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ContactEmail: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ContactPhone: {
        type: DataTypes.STRING(20)
    },
    Location: {
        type: DataTypes.STRING(100)
    },
    Description: {
        type: DataTypes.TEXT
    }
}, {
  timestamps: false
});

export default Nutricionists;
