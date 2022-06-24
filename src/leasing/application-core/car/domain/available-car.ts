import Car from "./car";
import RentedCar from "./rented-car";
import CarId from "../../../shared-kernel/domain/car-id";

export default class AvailableCar extends Car {

    constructor(id: CarId, type: string) {
        super(id, type);
    }

    public static load(id: CarId, type: string) {
        return new AvailableCar(id, type);
    }

    carIsRented(){
        return RentedCar.create(this.id, this.type);
    }
}
