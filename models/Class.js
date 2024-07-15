import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import Teacher from './Teacher.js'; 
import LevelClass from './LevelClass.js'; 
import TypeClass from './TypeClass.js'; 
import StatusClass from './StatusClass.js'; 

const Class = sequelize.define('Class', {
    ClassId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Description: {
        type: DataTypes.TEXT
    },
    TeacherId: {
        type: DataTypes.INTEGER,
        references: {
            model: Teacher,
            key: 'TeacherId'
        }
    },
    LevelClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: LevelClass,
            key: 'LevelClassId'
        }
    },
    TypeClassId: {
        type: DataTypes.INTEGER,
        references: {
            model: TypeClass,
            key: 'TypeClassId'
        }
    },
    Calories: {
        type: DataTypes.INTEGER
    },
    Duration: {
        type: DataTypes.INTEGER
    },
    StatusId: {
        type: DataTypes.INTEGER,
        references: {
            model: StatusClass,
            key: 'StatusId'
        }
    },
    Price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    Image: {
        type: DataTypes.STRING(700),
        allowNull: true
    },
}, {
  timestamps: false
});

Class.belongsTo(Teacher, { foreignKey: 'TeacherId' });
Class.belongsTo(LevelClass, { foreignKey: 'LevelClassId' });
Class.belongsTo(TypeClass, { foreignKey: 'TypeClassId' });
Class.belongsTo(StatusClass, { foreignKey: 'StatusId' });

export default Class;
