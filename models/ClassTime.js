import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const ClassTime = sequelize.define('ClassTime', {
    ClassTimeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Time: {
        type: DataTypes.TIME,
        allowNull: false
    }
}, {
    timestamps: false
});

export default ClassTime;