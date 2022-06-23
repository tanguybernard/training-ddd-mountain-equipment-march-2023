import CarPoolRepository from "../../ports/car-pool-repository";
import UpdateCarDto from "./update-car-dto";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";

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
        events.forEach(event =>  DomainEvents.dispatch(event));
    }

}
