import {DataSource} from "typeorm";
import {Organization} from "./bc-demo/infrastructure/postgres/organization/organization";
import {DB_PASSWORD, DB_USER} from "./env";

export const AppDataSource =
    process.env.NODE_ENV === 'test'
        ?
        new DataSource({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [Organization],
            synchronize: true,
            logging: false
        })
        :
        new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: DB_USER,
            password: DB_PASSWORD,
            database: "mydb",
            synchronize: true,
            logging: false,
            entities: [Organization],
            subscribers: [],
            migrations: [],
        });

