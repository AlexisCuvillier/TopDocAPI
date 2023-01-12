import cors from 'cors';
import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import helmet from 'helmet';
import { Server } from 'http';
import unexpectedErrorMiddleware from '../api/middlewares/error.global';
import { apiRouter } from './api.router';

dotenv.config()

export async function createServer() : Promise<Express>{

    const app = express();
    let server : Server
    app.use(helmet())

    app.use(express.json({ limit: '50kb'}))

    app.use(cors())
    app.use(apiRouter)
    app.use(unexpectedErrorMiddleware)

    return app
    
}