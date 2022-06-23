import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import CarPoolId from "../car-pool-id";

//TODO usefull ?
export default class CarAddedToPoolDomainEvent implements DomainEvent{

    constructor(private aggregateId: CarPoolId) {
    }

    get eventName(): string {
        return "car.added";
    }

    get occurredOn(): Date {
        return new Date();
    }

}
