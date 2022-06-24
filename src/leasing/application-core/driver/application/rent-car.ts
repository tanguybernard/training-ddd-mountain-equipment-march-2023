import DriverId from "../domain/driver-id";
import DriverRepository from "../../ports/driver-repository";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";
import CarRepository from "../../car/ports/car-repository";
import CarId from "../../../shared-kernel/domain/car-id";
import CarService from "../domain/services/car-service";


export default class RentCar {

    constructor(
        private carDomainService: CarService,
        private driverRepository: DriverRepository,
        private carRepository: CarRepository) {
    }

    async rentCar(driverId: DriverId, carId: CarId){

        const driver = await this.driverRepository.findById(driverId);
        const car = await this.carRepository.findAvailableCarById(carId);
        if(this.carDomainService.canRentCar(driver, car)){
            await this.driverRepository.update(driver);
        }

        //dispatch car rented event, in car part, status from AVAILABLE TO RENTED
        driver.pullDomainEvents().map(DomainEvents.dispatch);
    }

}
