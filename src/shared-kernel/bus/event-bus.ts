import { DomainEvent } from "./domain-event";
import EventHandler from "./event-handler";

export default interface EventBus {

    subscribe(eventClass, eventHandler: EventHandler): void
    publish(domainEvents : DomainEvent[]) : void

}
