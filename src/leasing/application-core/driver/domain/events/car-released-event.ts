import {DomainEvent} from "../../../../../shared-kernel/domain-event-dispatching/domain-event";
import DriverId from "../driver-id";
import CarId from "../../../../shared-kernel/domain/car-id";


export default class CarReleasedEvent implements DomainEvent{


    constructor(public aggregateId: DriverId, public carId: CarId) {
    }

    occurredOn: Date;

    get eventName(): string {
        return "car.released";
    }



}
