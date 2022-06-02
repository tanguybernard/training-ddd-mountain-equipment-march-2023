import {DomainEvent} from "../../../../../shared-kernel/bus/domain-event";
import DriverId from "../driver-id";
import CarId from "../car-id";


export default class CarRentedEvent implements DomainEvent{


    constructor(public aggregateId: DriverId, public carId: CarId) {
    }

    occurredOn: Date;

    get eventName(): string {
        return "car.rented";
    }



}
