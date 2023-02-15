import {AggregateRoot} from "../../../../shared-kernel/aggregate-root";
import DriverId from "./driver-id";
import CarRentedEvent from "./events/car-rented-event";
import CarReleasedEvent from "./events/car-released-event";
import CarId from "../../../shared-kernel/domain/car-id";
import Car from "../../car/domain/car";

export default class Driver extends AggregateRoot<DriverId>{

    //TODO create value object
    private constructor(
        public driverId: DriverId,
        public name: string,
        public licenseNumber: string,
        public age: number,
        public car?: Car,
    ) {
        super(driverId);
    }

    public static create(userId: DriverId, name: string, licenseNumber: string, age: number, car?: Car) {
        return new Driver(userId, name, licenseNumber, age, car);
    }

    public static load(userId: DriverId, name: string, licenseNumber: string, age: number, car?: Car) {
        return new Driver(userId, name, licenseNumber, age, car);
    }

    public rentCar(car: Car) {
        this.car = car
        this.record(new CarRentedEvent(this.driverId, car.id)); // The leasing Handler remove the car of the list of "rent car" until the car is released by the drive
    }

    public releaseCar(carId: CarId) {
        this.record(new CarReleasedEvent(this.driverId, carId));
    }


}
