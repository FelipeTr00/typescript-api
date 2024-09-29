import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';


class App {
    
    public express: express.Application

    public constructor () {
        this.express = express()
        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())

    }

    private database (): void {
        const mongoUri = 'mongodb://root:123@localhost:27017/typescript_api?authSource=admin';        mongoose.connect(mongoUri)
        .then(() => {
            console.log("Conectado ao MongoDB com sucesso!");
        })
        .catch((error) => {
            console.error("Erro de conexão MongoDB:", error);
        });
    }

    private routes (): void {
        this.express.use(routes)
        
    }
}

export default new App().express