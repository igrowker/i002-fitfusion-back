import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const AboutUsDev = sequelize.define('AboutUsDev', {
    AboutUsId: {
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
    }
}, {
  timestamps: false
});

export default AboutUsDev;
