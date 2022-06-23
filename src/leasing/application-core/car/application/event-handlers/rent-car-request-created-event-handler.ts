import EventHandler from "../../../../../shared-kernel/event-handler";
import CarRentedEvent from "../../../driver/domain/events/car-rented-event";


export default class RentCarRequestCreatedEventHandler implements EventHandler<CarRentedEvent> {


    constructor() {
    }

    handle(evt: CarRentedEvent): void {

    }

}
