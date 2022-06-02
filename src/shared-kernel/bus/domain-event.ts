export interface DomainEvent {

    occurredOn: Date;

    get eventName(): string

}
