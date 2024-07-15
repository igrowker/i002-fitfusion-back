import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Class from './Class.js';
import User from './User.js';
import ClassTime from './ClassTime.js';

const Payment = sequelize.define('Payment', {
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
    ClassTimeId: {
        type: DataTypes.INTEGER,
        references: {
        model: ClassTime,
        key: 'ClassTimeId'
        }
    }, 
    ClassDate: {
        type: DataTypes.DATE(10, 2),
        allowNull: false
    },
    ClassCompleted : {
        type: DataTypes.BOOLEAN, 
        defaultValue: false
    },
    Amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    Status: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    PaymentIntentId: {
        type: DataTypes.STRING(255), // Añadir el campo PaymentIntentId
        allowNull: true,
    },
}, {
    timestamps: false
});

Payment.belongsTo(Class, { foreignKey: 'ClassId' });
Payment.belongsTo(User, { foreignKey: 'UserId' });
Payment.belongsTo(ClassTime, { foreignKey: 'ClassTimeId' });

export default Payment;

