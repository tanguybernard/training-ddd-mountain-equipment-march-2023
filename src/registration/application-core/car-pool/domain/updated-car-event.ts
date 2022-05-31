import {DomainEvent} from "../../../../shared-kernel/bus/domain-event";
import CarPoolId from "./car-pool-id";

export default class UpdatedCarEvent implements DomainEvent{
    public occurredOn: Date;
    constructor(private aggregateId: CarPoolId) {
        this.occurredOn = new Date();
    }

    get eventName(): string {
        return "car.updated";
    }


}
