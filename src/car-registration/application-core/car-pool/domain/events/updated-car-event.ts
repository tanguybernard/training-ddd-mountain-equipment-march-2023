import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import CarId from "../../../../../leasing/shared-kernel/domain/car-id";
export default class UpdatedCarEvent implements DomainEvent{
    public occurredOn: Date;
    constructor(private aggregateId: CarId) {
        this.occurredOn = new Date();
    }

    get eventName(): string {
        return "car.updated";
    }


}
