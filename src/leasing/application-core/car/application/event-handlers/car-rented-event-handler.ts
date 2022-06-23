import EventHandler from "../../../../../shared-kernel/event-handler";
import CarRentedEvent from "../../../driver/domain/events/car-rented-event";
import CarRepository from "../../ports/car-repository";

// A implémenter dans une couche presentation ? Ou est-ce bien un use case ?
export default class CarRentedEventHandler implements EventHandler<CarRentedEvent> {


    constructor(private carRepository: CarRepository) {
    }

    async handle(evt: CarRentedEvent) {
        //update car status in db from available to rented

        const car = await  this.carRepository.findCarById(evt.carId);

        //TODO update status car
        await this.carRepository.updateCar(car)

    }

}
