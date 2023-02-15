import VehicleIdentificationNumber from "./vehicle-identification-number";
import CarBrand from "./car-brand";
import CarName from "./car-name";
import {AggregateRoot} from "../../../../shared-kernel/aggregate-root";
import CarReadyToBeRented from "./events/car-ready-to-be-rented";

export default class Car extends AggregateRoot<VehicleIdentificationNumber>{

    private constructor(
        public carId: VehicleIdentificationNumber,
        public carName: CarName,
        public carBrand: CarBrand,
        public technicalControlDate: Date,
        public status = ''
        ) {
        super(carId);
    }

    public static create(carId: VehicleIdentificationNumber, carName: CarName, carBrand: CarBrand, technicalControlDate: Date) {
        return new Car(carId, carName, carBrand, technicalControlDate);
    }

    public static load(carId: VehicleIdentificationNumber, carName: CarName, carBrand: CarBrand, technicalControlDate: Date) {
        return new Car(carId, carName, carBrand, technicalControlDate);
    }

    makeReadyToRent(){
        this.status = 'vehicleReadyForRental'
        this.record(CarReadyToBeRented);
    }

}
