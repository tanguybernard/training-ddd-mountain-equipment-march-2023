import {CarPoolName} from "../domain/car-pool-name";
import CarPoolRepository from "../domain/car-pool-repository";
import CarPool from "./../domain/car-pool";
import { v4 as uuidv4 } from 'uuid';
import CarPoolId from "../domain/car-pool-id";

export class CreatePool {

    constructor(private carPoolRepository: CarPoolRepository) {
    }

    async create(poolName: CarPoolName): Promise<CarPool>{
        const carPool = CarPool.create(new CarPoolId(uuidv4()), poolName);
        return this.carPoolRepository.createPool(carPool);
    }

}
