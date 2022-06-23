import IntegrationEvent from "../../shared-kernel/infrastructure/event-bus/integration-event";

//store into application directory ?
export default class CarReadyToRentIntegrationEvent implements IntegrationEvent{

    readonly id: String;
    readonly occurredOn: Date;

    constructor() {
        //take domain event in param or not.... depends case, conversion domain event to integraiton event...

    }


}
