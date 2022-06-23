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

        const driver = await this.driverRepository.getById(driverId);
        const car = await this.carRepository.findAvailableCarById(carId);
        if(this.carDomainService.canRentCar(driver, car)){
            //await this.driverRepository.update(carId); //TODO assign carId to driver ?

            //carRepositoyr.update()... TODO or domain event dispatch event and handler manage to update car status


        }

        //dispatch car rented event, so leasing part, update status of the car to ALREADY_RENTED
        driver.pullDomainEvents().map(DomainEvents.dispatch);
    }

}
