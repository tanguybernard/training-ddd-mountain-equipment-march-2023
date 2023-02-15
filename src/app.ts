import express from 'express'
import * as http from "http";
import {Server} from "http";
import hello from './car-registration/presentation/rest/hello-routes';
import driver from './leasing/presentation/rest/driver-router';


export function initServer(): Server {
    const app = express();
    const httpServer = http.createServer(app);
    app.use(express.json())

    app.use('/hello', hello)
    app.use('/driver', driver)

    return httpServer;
}
