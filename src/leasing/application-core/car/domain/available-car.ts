import Car from "./car";
import RentedCar from "./rented-car";

export default class AvailableCar extends Car {

    carIsRented(){
        return RentedCar.create(this.id, this.type);
    }
}
