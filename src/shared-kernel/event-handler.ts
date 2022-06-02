import {DomainEvent} from "./bus/domain-event";

export default interface EventHandler<Event extends DomainEvent>
{
    handle(evt: Event): void;
}
