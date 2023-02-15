import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import VehicleIdentificationNumber from "../vehicle-identification-number";

export default class CarReadyToBeRented implements DomainEvent{
    public occurredOn: Date;
    constructor(private aggregateId: VehicleIdentificationNumber) {
        this.occurredOn = new Date();
    }

    get eventName(): string {
        return "car.ready.to.be.rented";
    }


}
