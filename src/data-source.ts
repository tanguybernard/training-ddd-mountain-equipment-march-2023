import {DataSource} from "typeorm";
import {DB_PASSWORD, DB_USER} from "./env";
import {CarPoolDto} from "./car-registration/infrastructure/postgres/car-pool/pool/car-pool-dto";
import CarDto from "./car-registration/infrastructure/postgres/car-pool/car/car-dto";
import DriverDto from "./leasing/infrastructure/postgres/driver/driver-dto";
import CarLeasingDto from "./leasing/infrastructure/postgres/car/car-dto";

export const AppDataSource =
    process.env.NODE_ENV === 'test'
        ?
        new DataSource({
            type: "sqlite",
            database: ":memory:",
            dropSchema: true,
            entities: [CarPoolDto, CarDto, DriverDto, CarLeasingDto],
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
            synchronize: true,
            logging: false,
            entities: [CarPoolDto, CarDto, DriverDto, CarLeasingDto],
            subscribers: [],
            migrations: [],
        });

