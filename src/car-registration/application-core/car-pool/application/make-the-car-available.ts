import CarRepository from "../../ports/car-repository";
import EventBus from "../../ports/event-bus";
import VehicleIdentificationNumber from "../domain/vehicle-identification-number";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";
import CarReadyToRentIntegrationEvent from "../../../integration-events/car-ready-to-rent-integration-event";

export class MakeTheCarAvailable {

    constructor(private carRepository: CarRepository, private eventBus: EventBus) {
    }

    //instead of each field use something like UpdateCarDto
    async makeTheCarAvailable(carId: VehicleIdentificationNumber) : Promise<void>{

        const car = await this.carRepository.getCar(carId);

        car.makeReadyToRent();

        await this.carRepository.updateCar(car);

        //dispatch before or after, TODO decide strategy of transaction and risk of failure
        const events = car.pullDomainEvents();
        events.map(DomainEvents.dispatch)


        //be sure transaction done in database and push integration event
        //or use handler that use bus
        this.eventBus.emit(new CarReadyToRentIntegrationEvent());



    }


}
