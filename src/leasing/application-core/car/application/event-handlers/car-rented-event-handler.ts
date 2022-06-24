import EventHandler from "../../../../../shared-kernel/event-handler";
import CarRentedEvent from "../../../driver/domain/events/car-rented-event";
import CarRepository from "../../ports/car-repository";
import RentedCar from "../../domain/rented-car";

// A implémenter dans une couche presentation ? Ou est-ce bien un use case ?
export default class CarRentedEventHandler implements EventHandler<CarRentedEvent> {

    constructor(private carRepository: CarRepository) {
    }

    async handle(evt: CarRentedEvent) {
        const car = await this.carRepository.findCarById(evt.carId);
        const rentedCar = RentedCar.load(car.id, car.type)
        await this.carRepository.updateCar(rentedCar)
    }

}
