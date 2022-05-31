import CarPoolRepository from "../../ports/car-pool-repository";
import CarPool from "../domain/car-pool";
import UpdateCarDto from "./update-car-dto";
import CarPoolId from "../domain/car-pool-id";
import {DomainEvents} from "../../../../shared-kernel/bus/domain-events";
import e from "express";


export default class UpdateCar {

    // car pool repository manage aggregate, so a carRepository have no sense
    constructor(public carPoolRepository: CarPoolRepository) {

    }

    async update(carDto: UpdateCarDto): Promise<void> {

        const carPool = await this.carPoolRepository.getPoolById(carDto.carPoolId);

        if(carDto.carName) {
            carPool.updateCarName(carDto.carId, carDto.carName)
        }
        const car = carPool.getCar(carDto.carId);
        await this.carPoolRepository.updateCar(car);



        const events =  carPool.pullDomainEvents()
        //events.forEach(event -> eventPublisher.publish(event));
        events.forEach(event =>  DomainEvents.dispatch(event));
    }

}
