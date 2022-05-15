import CarName from "../domain/car-name";
import CarPoolRepository from "../domain/car-pool-repository";
import CarPool from "../domain/car-pool";
import {CarPoolName} from "../domain/car-pool-name";


export default class AddCar {

    constructor(private carPoolRepository: CarPoolRepository) {
    }

    async add(poolName: CarPoolName, name: CarName) : Promise<void>{

        //get CarPool
        const pool = await this.carPoolRepository.getPool(poolName)

        await this.carPoolRepository.addCar(pool.id, name);

        //eventBUs.publish()


    }


}
