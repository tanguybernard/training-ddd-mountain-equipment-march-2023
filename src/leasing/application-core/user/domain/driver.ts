import {AggregateRoot} from "../../../../shared-kernel/aggregate-root";
import DriverId from "./driver-id";
import CarId from "./car-id";
import CarRentedEvent from "./events/car-rented-event";
import CarReleasedEvent from "./events/car-released-event";

export default class Driver extends AggregateRoot<DriverId>{

    //TODO create value object
    private constructor(
        public driverId: DriverId,
        public firstName: string,
        public lastName: string,
        public licenseNumber: string) {

        super(driverId);

    }

    public static create(userId, firstName, lastName, licenseNumber) {
        return new Driver(userId, firstName, lastName, licenseNumber);
    }

    public rentCar(carId: CarId) {
        this.record(new CarRentedEvent(this.driverId, carId)); // The leasing Handler remove the car of the list of "rent car" until the car is released by the drive
    }

    public releaseCar(carId: CarId) {
        this.record(new CarReleasedEvent(this.driverId, carId));
    }


}
