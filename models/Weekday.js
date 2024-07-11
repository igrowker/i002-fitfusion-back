

import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Weekday = sequelize.define('Weekday', {
    WeekdayId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    timestamps: false
});

export default Weekday;