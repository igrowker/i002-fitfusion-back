// UserClass.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import User from './User.js';
import Class from './Class.js';

const UserClass = sequelize.define('UserClass', {
    UserClassId: {
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
    ClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: Class,
            key: 'ClassId'
        }
    }
}, {
  timestamps: false
});

UserClass.belongsTo(User, { foreignKey: 'UserId' });
UserClass.belongsTo(Class, { foreignKey: 'ClassId' });

export default UserClass;


