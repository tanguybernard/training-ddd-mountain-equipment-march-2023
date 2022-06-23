import {DomainEvent} from "./domain-event-dispatching/domain-event";


//handler implementer dans la couche presentation d'un autre BC
export default interface EventHandler<Event extends DomainEvent>
{
    handle(evt: Event): void;
}
