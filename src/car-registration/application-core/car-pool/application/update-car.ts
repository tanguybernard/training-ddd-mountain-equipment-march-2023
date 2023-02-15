import CarRepository from "../../ports/car-repository";
import UpdateCarDto from "./update-car-dto";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";
import CarNotFound from "../domain/car-not-found";

export default class UpdateCar {

    // car pool repository manage aggregate, so a carRepository have no sense
    constructor(public carPoolRepository: CarRepository) {

    }

    async update(carDto: UpdateCarDto): Promise<void> {

        const car = await this.carPoolRepository.getCar(carDto.carId);

        if(car === null) {
            throw new CarNotFound("Car not found");
        }

        car.carName = carDto.carName

        await this.carPoolRepository.updateCar(car);

    }

}
