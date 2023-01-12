import { DataTypes, InferAttributes, Model } from "sequelize";
import { Address } from '../address.model';
import sequelize from '../../core/database/sequelize';

export class AddressDAO extends Model<InferAttributes<AddressDAO>> implements Address {
    id_address!: number;
    zip_code!: number;
    street!: string;
    number_street!: number;
    additional_information!: string;
    city!: string;
}


AddressDAO.init (
    {
        id_address: {
            type: DataTypes.INTEGER, //INFO ici on fixe la taille max en BDD à 50
            field: "id_adress",
            autoIncrement: true,
            primaryKey: true
        },
        zip_code: {
            type: DataTypes.INTEGER, //INFO ici on fixe la taille max en BDD à 50
            field: "zip_code",
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING(50), //INFO ici on fixe la taille max en BDD à 50
            field: "street",
            allowNull: false,
            validate: {
                len: [0, 50], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        },
        number_street: {
            type: DataTypes.INTEGER,
            field: "name",
            allowNull: false,
            validate: {
                len: [0, 50], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        },
        additional_information: {
            type: DataTypes.STRING(80), //INFO ici on fixe la taille max en BDD à 50
            field: "additional_information",
            validate: {
                len: [0, 80], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        },
        city: {
            type: DataTypes.STRING(50), //INFO ici on fixe la taille max en BDD à 50
            field: "city",
            allowNull: false,
            validate: {
                len: [0, 50], //INFO ici sequelize fera un check avant de contacter la BDD
            },
        },
    },
    {
        sequelize,
        modelName: 'Address',
        timestamps: false, 
        freezeTableName: true
    }
)