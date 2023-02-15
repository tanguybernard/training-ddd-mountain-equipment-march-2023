import GetHelloZenika from "./application-core/car-pool/application/get-hello-zenika";
import {RequestHandler} from "express";
import {carPoolController, helloController} from "./presentation/factory";
import CarRepository from "./application-core/ports/car-repository";
import CarDao from "./infrastructure/postgres/car-pool/car/car-dao";
import AddCar from "./application-core/car-pool/application/add-car";
import {RabbitEventBus} from "./infrastructure/bus/RabbitEventBus";
import CarMapper from "./infrastructure/postgres/car-pool/car/car-mapper";
import CarPgRepository from "./infrastructure/postgres/car-pool/car/car-repository";

export default class CarPoolFactory {

    private static useCaseGetHelloZenika(): GetHelloZenika {
        return new GetHelloZenika(); //ou passer par une factory application-factory.ts
    }


    private static useCaseAddCar(): AddCar {
        return new AddCar(this.carRepository(), new RabbitEventBus());
    }
    static carRepository() : CarRepository {
        return new CarPgRepository(CarDao, new CarMapper());
    }

    static getHelloZenika(): RequestHandler {
        return helloController.getHelloWorld(this.useCaseGetHelloZenika())
    }

    static addCar(): RequestHandler {
        return carPoolController.addCar(this.useCaseAddCar());
    }
}
