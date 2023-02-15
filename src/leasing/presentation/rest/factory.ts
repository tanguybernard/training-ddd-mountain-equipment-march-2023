import {RequestHandler} from "express";
import {DriverController} from "./driver-controller";
import LeasingFactory from "../../leasing-factory";

export class RestFactory {
    static createDriver(): RequestHandler {
        return new DriverController().createDriver(LeasingFactory.useCaseCreateDriver())
    }

}
