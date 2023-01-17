import { DataTypes, InferAttributes, Model } from "sequelize";

import sequelize from "../../core/database/sequelize";
import { Cabinet } from '../cabinet.model';

export class CabinetDAO extends Model<InferAttributes<CabinetDAO>>  implements Cabinet
{
    id_cabinet!: number;


}

CabinetDAO.init(
    {
        id_cabinet: {
            type: DataTypes.INTEGER,
            field: "id_role",
            autoIncrement: true,
            primaryKey: true,
        }
    },
    {
        sequelize,
        modelName: "Cabinet",
        timestamps: false,
        freezeTableName: true,
    }
);
