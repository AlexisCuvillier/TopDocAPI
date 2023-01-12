import { Model, InferAttributes, STRING, DataTypes } from 'sequelize';
import { Availability } from '../availability.model';
import sequelize from '../../core/database/sequelize';

export class AvailabilityDAO extends Model<InferAttributes<AvailabilityDAO>> implements Availability {
    id_days!: number;
    days!: string;
}

AvailabilityDAO.init(
    {
        id_days: {
            type: DataTypes.INTEGER,
            field: "id_days",
            autoIncrement: true,
            primaryKey: true
        },
        days: {
            type: DataTypes.STRING,
            field: "days",
            allowNull: false,
        }
    },
     {
        sequelize,
        modelName: 'Availability',
        timestamps: false, 
        freezeTableName: true
     }
)