import GetHelloZenika from "./application-core/car-pool/application/get-hello-zenika";
import {RequestHandler} from "express";
import {helloController} from "./presentation/factory";
import CarPoolRepository from "./application-core/ports/car-pool-repository";
import CarPoolDao from "./infrastructure/postgres/car-pool/pool/car-pool-dao";
import CarDao from "./infrastructure/postgres/car-pool/car/car-dao";
import CarPoolPgRepository from "./infrastructure/postgres/car-pool/pool/car-pool-repository";
import CarPoolMapper from "./infrastructure/postgres/car-pool/pool/car-pool-mapper";

export default class CarPoolFactory {

    private static useCaseGetHelloZenika(): GetHelloZenika {
        return new GetHelloZenika(); //ou passer par une factory application-factory.ts
    }

    static carPoolRepository() : CarPoolRepository {
        return new CarPoolPgRepository(CarPoolDao, CarDao, new CarPoolMapper());
    }

    static getHelloZenika(): RequestHandler {
        return helloController.getHelloWorld(this.useCaseGetHelloZenika())
    }
}
