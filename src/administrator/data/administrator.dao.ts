import { Model, InferAttributes, DataTypes } from 'sequelize';
import sequelize from '../../core/database/sequelize';

export class AdministratorDAO extends Model<InferAttributes<AdministratorDAO>> implements AdministratorDAO
{
    id_user?:number;
    email_contact!:string
    praticien!:boolean
}

AdministratorDAO.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_user',
          },
        email_contact: {
            type: DataTypes.STRING,
            field: "email_contact",
            allowNull: false,
        },
        praticien: {
            type: DataTypes.BOOLEAN,
            field: "praticien",
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Administrator",
        timestamps: false,
        freezeTableName: true,
    }
    
)