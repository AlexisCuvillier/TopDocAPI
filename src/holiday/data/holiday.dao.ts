import { DataTypes, InferAttributes, Model } from "sequelize";
import { Holiday } from "../holiday.model";
import sequelize from '../../core/database/sequelize';

export class HolidayDAO extends Model<InferAttributes<HolidayDAO>> implements Holiday
{
    id_holiday!: number;
    start_date!: Date;
    end_date!:Date;
}

HolidayDAO.init(
    {
        id_holiday: {
            type: DataTypes.INTEGER,
            field: "id_holiday",
            autoIncrement:true,
            primaryKey: true
        },
        start_date : {
            type: DataTypes.DATE,
            field: "start_date",
        },
        end_date: {
            type: DataTypes.DATE,
            field: 'end_date'
        }
    },
    {
        sequelize,
        modelName: "Holiday",
        timestamps: false, 
        freezeTableName: true
    }
)