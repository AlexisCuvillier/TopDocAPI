import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(

    `$TopDoc`,
    `$alexis`,
    `123456`,
    {
        host: `b836212.online-server.cloud`,
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