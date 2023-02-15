import CarName from "../domain/car-name";
import CarRepository from "../../ports/car-repository";
import EventBus from "../../ports/event-bus";
import Car from "../domain/car";
import VehicleIdentificationNumber from "../domain/vehicle-identification-number";
import CarBrand from "../domain/car-brand";


export default class AddCar {

    constructor(private carRepository: CarRepository, private eventBus: EventBus) {
    }

    //instead of each field use something like UpdateCarDto
    async add(vin: string, name: CarName, brand: CarBrand) : Promise<void>{

        const car = Car.create(VehicleIdentificationNumber.create(vin), name, brand, new Date())

        await this.carRepository.addCar(car);

    }


}
