import { DataTypes, InferAttributes, Model } from "sequelize";
import { TopDocUser } from "../topDocUser.model";
import sequelize from "../../core/database/sequelize";

export class TopDocUserDAO extends Model<InferAttributes<TopDocUserDAO>>  implements TopDocUser
{
    id_user?: number;
    name!: string;
    lastname!: string;
    mail!: string;
    password!: string;
    phone!: number;
}

TopDocUserDAO.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            field: "id_user",
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50), //INFO ici on fixe la taille max en BDD à 50
            field: "name",
            allowNull: false,
            validate: {
                len: [0, 50], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        },
        lastname: {
            type: DataTypes.STRING(50),
            field: "lastname",
            allowNull: false,
            validate: {
                len: [0, 50],
            },
        },
        mail: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                isEmail: true, //INFO built-in validator pour sequelize https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
                len: [0, 50],
            },
        },
        password: {
            type: DataTypes.STRING,
            field: "password",
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            field: "phone",
        },
    },
    {
        sequelize,
        modelName: "TopDocUser",
        timestamps: false,
        freezeTableName: true,
    }
);
