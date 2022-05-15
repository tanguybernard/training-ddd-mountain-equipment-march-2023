import {DataSource} from "typeorm";
import {DB_PASSWORD, DB_USER} from "./env";
import {CarPoolDto} from "./car-pool/infrastructure/postgres/car-pool/pool/car-pool-dto";
import CarDto from "./car-pool/infrastructure/postgres/car-pool/car/car-dto";

export const AppDataSource =
    process.env.NODE_ENV === 'test'
        ?
        new DataSource({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [CarPoolDto, CarDto],
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
            entities: [CarPoolDto, CarDto],
            subscribers: [],
            migrations: [],
        });

