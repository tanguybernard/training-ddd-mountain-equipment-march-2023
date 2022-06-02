import EventHandler from "../../../../../shared-kernel/event-handler";
import CarRentedEvent from "../../../user/domain/events/car-rented-event";


export default class RentCarRequestCreatedEventHandler implements EventHandler<CarRentedEvent> {

    handle(evt: CarRentedEvent): void {
        //emit publish

    }

}
