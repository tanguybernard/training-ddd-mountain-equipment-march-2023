import {DomainEntity} from "../../../../shared-kernel/domain-entity";
import CarId from "./car-id";
import CarBrand from "./car-brand";
import CarName from "./car-name";

export default class Car extends DomainEntity<CarId>{

    private constructor(public carId: CarId, public carName: CarName, public carBrand: CarBrand) {
        super(carId);
    }

    public static create(carId: CarId, carName: CarName, carBrand: CarBrand) {
        return new Car(carId, carName, carBrand)
    }

}
