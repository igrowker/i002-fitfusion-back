import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Class from './Class.js';
import User from './User.js';

const Feedback = sequelize.define('Feedback', {
    Id: {
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
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    Comment: {
        type: DataTypes.TEXT
    },
    Rating: {
        type: DataTypes.INTEGER
    }
}, {
  timestamps: false
});

Feedback.belongsTo(Class, { foreignKey: 'ClassId' });
Feedback.belongsTo(User, { foreignKey: 'UserId' });

export default Feedback;


