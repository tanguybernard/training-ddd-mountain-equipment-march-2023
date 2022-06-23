import IntegrationEvent from "../../../shared-kernel/infrastructure/event-bus/integration-event";

// TODO into shared kernel ?
export default interface EventBus {

    emit(event: IntegrationEvent): void

}
