import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import CarId from "../../../../../leasing/shared-kernel/domain/car-id";
import {ValueObjectId} from "../../../../../shared-kernel/value-object-id";

//TODO usefull ?
export default class CarAddedToPoolDomainEvent implements DomainEvent{

    constructor(private aggregateId: CarId) {
    }

    get eventName(): string {
        return "car.added";
    }

    get occurredOn(): Date {
        return new Date();
    }

    getAggregateId(): ValueObjectId<any> {
        return this.aggregateId;
    }

}
