import {AggregateRoot} from "../../../../shared-kernel/aggregate-root";
import CarPoolId from "./car-pool-id";
import {CarPoolName} from "./car-pool-name";
import Car from "./car";
import CarId from "./car-id";
import CarName from "./car-name";
import UpdatedCarEvent from "./events/updated-car-event";
import CarAddedToPoolDomainEvent from "./events/car-added-to-pool-domain-event";

export default class CarPool extends AggregateRoot<CarPoolId>{

    private constructor(readonly id: CarPoolId, readonly name: CarPoolName, public cars: Car[]) {
        super(id);
    }

    public static create(id: CarPoolId, name: CarPoolName, cars: Car[] = []): CarPool {
        return new CarPool(id, name, cars);
    }

    addCar(car: Car){
        this.cars.push(car);
        this.record(new CarAddedToPoolDomainEvent(this.id))//add field to this event (name, brand...)
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
