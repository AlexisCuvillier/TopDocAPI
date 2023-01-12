import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(

    `${process.env.NAME_DATABASE}`,
    `${process.env.HOST_DATABASE}`,
    `${process.env.PASS_DATABASE}`,
    {
        host: `${process.env.HOST_DATA}`,
        dialect: 'postgres',
        port: 5432 || process,
        dialectOptions: {
            useUTC: false,
            dateStrings: true,
            typeCast: true
        },
        timezone: '+02:00'
    }
)

export default sequelize;