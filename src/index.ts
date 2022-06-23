import 'module-alias/register';
import {initServer} from "./app";
import { PORT } from './env';
import {AppDataSource} from "./data-source";
import {CarPoolDto} from "./car-registration/infrastructure/postgres/car-pool/pool/car-pool-dto";
import {DomainEvents} from "./shared-kernel/domain-event-dispatching/domain-events";
import CarRentedEvent from "./leasing/application-core/driver/domain/events/car-rented-event";
import CarRentedEventHandler
    from "./leasing/application-core/car/application/event-handlers/car-rented-event-handler";
import CarAddedToPoolEventHandler
    from "./leasing/application-core/car/application/event-handlers/car-added-to-pool-event-handler";
import CarAddedEvent from "./leasing/application-core/driver/domain/events/car-added-event";


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new orga into the database...")
    const carPool = new CarPoolDto()

    carPool.name = "Star Trek"
    await AppDataSource.manager.save(carPool)
    console.log("Saved a new carPool with id: " + carPool.id)

    console.log("Loading carPoolnizations from the database...")
    const carPoolFound = await AppDataSource.manager.find(CarPoolDto)
    console.log("Loaded carPool: ", carPoolFound);


}).catch(error => console.log(error))

DomainEvents.register(new CarRentedEventHandler(), CarRentedEvent.name);
DomainEvents.register(new CarAddedToPoolEventHandler(), CarAddedEvent.name);


const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});

export default server;
