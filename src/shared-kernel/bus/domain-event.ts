import {ValueObjectId} from "../value-object-id";

export interface DomainEvent {

    get eventName(): string
    get occurredOn(): Date

}
