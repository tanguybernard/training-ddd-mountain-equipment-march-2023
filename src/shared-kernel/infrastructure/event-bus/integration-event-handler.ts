import IntegrationEvent from "./integration-event";


interface IntegrationEventHandler<T extends IntegrationEvent> {

    handle(event: T): void;
}

export default IntegrationEventHandler;
