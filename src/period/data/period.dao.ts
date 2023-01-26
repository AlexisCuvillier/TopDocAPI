import { Model, InferAttributes, STRING, DataTypes } from 'sequelize';
import { Period } from '../period.model';
import sequelize from '../../core/database/sequelize';


export class PeriodDAO extends Model<InferAttributes<PeriodDAO>> implements Period {
    id_period?: number;
    start_date!: Date;
    end_date!:Date
}

PeriodDAO.init(
    {
        id_period: {
            type: DataTypes.INTEGER,
            field: "id_period",
            autoIncrement: true,
            primaryKey: true
        },
        start_date: {
            type: DataTypes.DATE,
            field: "start_date",
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            field: "end_date",
            allowNull: false,
        }
    },
     {
        sequelize,
        modelName: 'Period',
        timestamps: false, 
        freezeTableName: true
     }
)