import CarName from "../domain/car-name";
import CarPoolRepository from "../../ports/car-pool-repository";
import CarPool from "../domain/car-pool";
import {CarPoolName} from "../domain/car-pool-name";
import EventBus from "../../ports/event-bus";
import Car from "../domain/car";
import CarId from "../domain/car-id";
import {v4 as uuidv4} from "uuid";
import CarBrand from "../domain/car-brand";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";
import CarReadyToRentIntegrationEvent from "../../../integration-events/car-ready-to-rent-integration-event";


export default class AddCar {

    constructor(private carPoolRepository: CarPoolRepository, private eventBus: EventBus) {
    }

    //instead of each field use something like UpdateCarDto
    async add(poolName: CarPoolName, name: CarName, brand: CarBrand) : Promise<void>{

        //get CarPool
        const pool = await this.carPoolRepository.getPool(poolName)
        pool.addCar(Car.create(new CarId(uuidv4()), name, brand, new Date()));

        //dispatch before or after, TODO decide strategy of transaction and risk of failure
        const events = pool.pullDomainEvents();
        events.map(DomainEvents.dispatch)


        const last: Car = pool.cars[pool.cars.length - 1];

        await this.carPoolRepository.addCar(pool.id, last);

        //be sure transaction done in database and push integration event
        //or use handler that use bus
        this.eventBus.emit(new CarReadyToRentIntegrationEvent());



    }


}
