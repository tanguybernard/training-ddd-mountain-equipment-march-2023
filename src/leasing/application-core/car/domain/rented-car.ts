import Car from "./car";
import AvailableCar from "./available-car";
import CarId from "../../../shared-kernel/domain/car-id";

export default class RentedCar extends Car {

    constructor(carId: CarId, type: string) {
        super(carId, type);
    }

    static load(carId: CarId, type: string) {
        return new RentedCar(carId, type);
    }

    carIsReleased(){
        return AvailableCar.create(this.id, this.type);
    }
}
