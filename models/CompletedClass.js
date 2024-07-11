import { DataTypes } from "sequelize";
import sequelize from '../database/database.js';
import User from './User.js';
import Class from './Class.js';

const CompletedClass = sequelize.define('CompletedClass', {
    CompletedClassId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserId: { 
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId',
        },
        allowNull: false,
    },
    ClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: 'ClassId',
        },
        allowNull: false,
    },
    CompletionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
});

CompletedClass.belongsTo(User, {foreignKey: 'UserId'});
CompletedClass.belongsTo(Class, {foreignKey: 'ClassId'});

export default CompletedClass;
