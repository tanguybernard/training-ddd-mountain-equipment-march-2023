import EventBus from "../../application-core/ports/event-bus";
import IntegrationEvent from "../../../shared-kernel/infrastructure/event-bus/integration-event";


export class RabbitEventBus implements EventBus {


    emit(event: IntegrationEvent): void {

        //rabbit mq send message to channel
    }

}
