import Car from "./car";
import AvailableCar from "./available-car";

export default class RentedCar extends Car {

    carIsReleased(){
        return AvailableCar.create(this.id, this.type);
    }
}
