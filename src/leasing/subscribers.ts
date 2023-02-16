import {DomainEvents} from "../shared-kernel/domain-event-dispatching/domain-events";
import CarRentedEventHandler from "./application-core/car/application/event-handlers/car-rented-event-handler";
import LeasingFactory from "./leasing-factory";
import CarRentedEvent from "./application-core/driver/domain/events/car-rented-event";



DomainEvents.register(new CarRentedEventHandler(LeasingFactory.carRepository()), CarRentedEvent.name);
