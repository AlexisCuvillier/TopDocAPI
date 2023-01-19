import { DataTypes, InferAttributes, Model } from "sequelize";
import sequelize from "../../core/database/sequelize";
import { Patient } from "../patient.model";
import { TopDocUser } from '../../topDocUser/topDocUser.model';

export class PatientDAO extends Model<InferAttributes<PatientDAO>> implements PatientDAO
{
    id_user?:number;
    num_secu!: number;
}

PatientDAO.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_user',
          },

        num_secu: {
            type: DataTypes.BIGINT,
            field: "num_secu",
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Patient",
        timestamps: false,
        freezeTableName: true,
    }
);
