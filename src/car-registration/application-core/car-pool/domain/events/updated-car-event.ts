import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import {ValueObjectId} from "../../../../../shared-kernel/value-object-id";
import Car from "../car";
export default class UpdatedCarEvent implements DomainEvent{
    public occurredOn: Date;
    constructor(private car: Car) {
        this.occurredOn = new Date();
    }

    get eventName(): string {
        return "car.updated";
    }

    getAggregateId(): ValueObjectId<any> {
        return this.car.carId;
    }

}
