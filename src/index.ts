import * as dotenv from 'dotenv'

import sequelize from './core/database/sequelize'
import { createServer } from './core/server'
import { logger } from './winston.logger'


dotenv.config()

createServer().then(app => {
    sequelize.sync({force : true})

    app.listen(process.env.PORT, () => logger.info(`Lancé sur le port ${process.env.PORT}`))
    app.get('/hello', (req, res) => res.send('Hello Simplon by gaetan'));
})