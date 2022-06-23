import express from 'express'
import * as http from "http";
import {Server} from "http";
import hello from './car-registration/presentation/rest/hello-routes';
import carPool from './car-registration/presentation/rest/car-pool-routes';


export function initServer(): Server {
    const app = express();
    const httpServer = http.createServer(app);
    app.use(express.json())

    app.use('/hello', hello)

    return httpServer;
}
