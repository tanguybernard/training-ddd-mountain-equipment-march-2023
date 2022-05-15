import 'module-alias/register';
import {initServer} from "./app";
import { PORT } from './env';
import {AppDataSource} from "./data-source";
import {Organization} from "./car-pool/infrastructure/postgres/organization/organization";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new orga into the database...")
    const orga = new Organization()
    orga.name = "Star Trek"
    await AppDataSource.manager.save(orga)
    console.log("Saved a new orga with id: " + orga.id)

    console.log("Loading organizations from the database...")
    const organizations = await AppDataSource.manager.find(Organization)
    console.log("Loaded organizations: ", organizations)

}).catch(error => console.log(error))

//new WrapperSubscriber(configBusBCAdmin)
//wrapper.listen()

const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});

export default server;
