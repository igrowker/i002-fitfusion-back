import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import User from './User.js';

const Teacher = sequelize.define('Teacher', {
    TeacherId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    Bio: {
        type: DataTypes.TEXT
    },
    ProfessionalTitle: {
        type: DataTypes.STRING(255)
    },
    YearsExperience: {
        type: DataTypes.INTEGER
    },
    ClassType: {
        type: DataTypes.STRING(100)
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
  timestamps: false
});

Teacher.belongsTo(User, { foreignKey: 'UserId' });

export default Teacher;
