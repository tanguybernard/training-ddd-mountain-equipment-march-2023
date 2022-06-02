import {AggregateRoot} from "../../../../shared-kernel/aggregate-root";
import CarPoolId from "./car-pool-id";
import CarAddedToPool from "./car-added-to-pool";
import {CarPoolName} from "./car-pool-name";
import Car from "./car";
import CarId from "./car-id";
import CarName from "./car-name";
import UpdatedCarEvent from "./updated-car-event";

export default class CarPool extends AggregateRoot<CarPoolId>{

    private constructor(readonly id: CarPoolId, readonly name: CarPoolName, public cars: Car[]) {
        super(id);
    }

    public static create(id: CarPoolId, name: CarPoolName, cars: Car[] = []): CarPool {
        return new CarPool(id, name, cars);
    }

    add(){
        this.record(new CarAddedToPool(this.id))

    }

    getCar(carId) : Car {
        return this.cars.find(car => car.carId.equals(carId));
    }

    updateCarName(carId: CarId, carName: CarName) {
        const updateItem = this.cars.find(car => car.carId.equals(carId));
        const index = this.cars.indexOf(updateItem);
        this.cars[index].carName = carName;
        this.record(new UpdatedCarEvent(this.id));

    }

}
