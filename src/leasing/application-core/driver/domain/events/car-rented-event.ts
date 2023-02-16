import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import DriverId from "../driver-id";
import CarId from "../../../../shared-kernel/domain/car-id";
import {ValueObjectId} from "../../../../../shared-kernel/value-object-id";


export default class CarRentedEvent implements DomainEvent{


    constructor(public aggregateId: DriverId, public carId: CarId) {
    }

    occurredOn: Date;

    get eventName(): string {
        return "car.rented";
    }

    getAggregateId(): ValueObjectId<any> {
        return this.aggregateId;
    }


}
