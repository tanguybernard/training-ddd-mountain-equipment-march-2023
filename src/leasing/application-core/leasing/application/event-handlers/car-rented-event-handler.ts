import EventHandler from "../../../../../shared-kernel/event-handler";
import CarRentedEvent from "../../../user/domain/events/car-rented-event";

export default class CarRentedEventHandler implements EventHandler<CarRentedEvent> {

    handle(evt: CarRentedEvent) {
        //update car status in db from available to rented
    }

}
