import {AggregateRoot} from "../../../shared-kernel/aggregate-root";
import CarPoolId from "./car-pool-id";
import CarAddedToPool from "./car-added-to-pool";
import {CarPoolName} from "./car-pool-name";

export default class CarPool extends AggregateRoot<CarPoolId>{

    private constructor(readonly id: CarPoolId, readonly name: CarPoolName) {
        super(id);
    }

    public static create(id: CarPoolId, name: CarPoolName): CarPool {
        return new CarPool(id, name);
    }

    add(){
        this.record(new CarAddedToPool(this.id))

    }

}
