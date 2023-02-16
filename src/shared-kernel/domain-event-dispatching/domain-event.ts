import {ValueObjectId} from "../value-object-id";

export interface DomainEvent {

    occurredOn: Date;

    get eventName(): string

    getAggregateId (): ValueObjectId<any>;


}
