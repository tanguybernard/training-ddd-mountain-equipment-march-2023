import express from 'express'
import * as http from "http";
import {Server} from "http";



export function initServer(): Server {
    const app = express();
    const httpServer = http.createServer(app);
    app.use(express.json())



    return httpServer;
}
