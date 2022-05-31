import 'module-alias/register';
import {initServer} from "./app";
import { PORT } from './env';
import {AppDataSource} from "./data-source";
import {CarPoolDto} from "./registration/infrastructure/postgres/car-pool/pool/car-pool-dto";
import {AfterCarUpdatedSubscriber} from "./registration/infrastructure/bus/subscribers/after-car-updated-subscriber";


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

//new WrapperSubscriber(configBusBCAdmin)
//wrapper.listen()

const carUpdatedSubscriber = new AfterCarUpdatedSubscriber();
carUpdatedSubscriber.setupSubscriptions();


const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});

export default server;
