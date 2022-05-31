import { DomainEvent } from "./domain-event";


export default interface EventHandler{

    handle(event: DomainEvent, ): void;

}
