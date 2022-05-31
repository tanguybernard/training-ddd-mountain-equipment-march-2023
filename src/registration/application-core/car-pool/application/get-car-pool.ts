import {CarPoolName} from "../domain/car-pool-name";
import CarPoolRepository from "./../../ports/car-pool-repository";
import CarPool from "./../domain/car-pool";

export class GetCarPool {

    constructor(private carPoolRepository: CarPoolRepository) {
    }

    async get(poolName: CarPoolName): Promise<CarPool>{
        return this.carPoolRepository.getPool(poolName);
    }

}
