import { DataTypes, InferAttributes, Model } from "sequelize";
import sequelize from "../../core/database/sequelize";
import { Hourly } from '../hourly.model';

export class HourlyDAO extends Model<InferAttributes<HourlyDAO>>  implements Hourly
{
    id_hourly?: number;
    early_hours!: Date;
    end_hours!: Date;
    appointment_duration!: TimeRanges;
}

HourlyDAO.init(
    {
        id_hourly: {
            type: DataTypes.INTEGER,
            field: "id_user",
            autoIncrement: true,
            primaryKey: true,
        },
        early_hours: {
            type: DataTypes.DATE, 
            field: "early_hours",
            allowNull: false,
        },
        end_hours: {
            type: DataTypes.DATE,
            field: "end_hours",
            allowNull: false,

        },
        appointment_duration: {
            type: DataTypes.TIME,
            allowNull: false,
            field: 'appointment_duration'
        }
    },
    {
        sequelize,
        modelName: "Hourly",
        timestamps: false,
        freezeTableName: true,
    }
);
