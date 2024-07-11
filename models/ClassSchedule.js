import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Class from './Class.js';
import Weekday from './Weekday.js';
import ClassTime from './ClassTime.js';

const ClassSchedule = sequelize.define('ClassSchedule', {
    ScheduleId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: 'ClassId'
        }
    },
    WeekdayId: {
        type: DataTypes.INTEGER,
        references: {
            model: Weekday,
            key: 'WeekdayId'
        }
    },
    ClassTimeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ClassTimes',
            key: 'ClassTimeId'
        }
    }
}, {
    timestamps: false
});

ClassSchedule.belongsTo(Class, { foreignKey: 'ClassId' });
ClassSchedule.belongsTo(Weekday, { foreignKey: 'WeekdayId' });
ClassSchedule.belongsTo(ClassTime, { foreignKey: 'ClassTimeId' });

export default ClassSchedule;