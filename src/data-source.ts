import {DataSource} from "typeorm";
import {DB_PASSWORD, DB_USER} from "./env";


export const AppDataSource =
    process.env.NODE_ENV === 'test'
        ?
        new DataSource({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [],
            synchronize: true,
            logging: false//'all'
        })
        :
        new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: DB_USER,
            password: DB_PASSWORD,
            database: "mydb",
            synchronize: false,
            logging: false,
            entities: [],
            subscribers: [],
            migrations: [],
        });

