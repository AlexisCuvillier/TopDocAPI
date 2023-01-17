import { DataTypes, InferAttributes, Model } from "sequelize";

import sequelize from "../../core/database/sequelize";
import { Role } from '../role.model';

export class RoleDAO extends Model<InferAttributes<RoleDAO>>  implements Role
{
    id_role?: number;
    role!: string;

}

RoleDAO.init(
    {
        id_role: {
            type: DataTypes.INTEGER,
            field: "id_role",
            autoIncrement: true,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING(50), //INFO ici on fixe la taille max en BDD à 50
            field: "name",
            allowNull: false,
            validate: {
                len: [0, 50], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        }
    },
    {
        sequelize,
        modelName: "Role",
        timestamps: false,
        freezeTableName: true,
    }
);
