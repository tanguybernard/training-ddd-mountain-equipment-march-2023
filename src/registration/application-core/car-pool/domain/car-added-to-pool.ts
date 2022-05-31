import {DomainEvent} from "../../../../shared-kernel/bus/domain-event";
import CarPoolId from "./car-pool-id";

export default class CarAddedToPool implements DomainEvent{

    constructor(private aggregateId: CarPoolId) {
    }

    get eventName(): string {
        return "car.added";
    }

    get occurredOn(): Date {
        return new Date();
    }

}
