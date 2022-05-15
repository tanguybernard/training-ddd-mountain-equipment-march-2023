import CarPoolRepository from "../../../../application-core/domain/car-pool-repository";
import {Repository} from "typeorm";
import {CarPoolDto} from "./car-pool-dto";
import CarName from "../../../../application-core/domain/car-name";
import CarPool from "../../../../application-core/domain/car-pool";
import {CarPoolName} from "../../../../application-core/domain/car-pool-name";
import CarPoolMapper from "./car-pool-mapper";
import CarDto from "../car/car-dto";
import CarPoolId from "../../../../application-core/domain/car-pool-id";
import CarPoolNotExist from "../../../../application-core/domain/car-pool-not-exist";


export default class CarPoolPgRepository implements CarPoolRepository {

    constructor(
        private carPoolDao: Repository<CarPoolDto>,
        private carDao: Repository<CarDto>,
        private mapper: CarPoolMapper) {
    }

    async addCar(poolId : CarPoolId, name: CarName): Promise<void> {
        let car = new CarDto();
        car.name = name.value;
        car.pool_id = poolId.props
        await this.carDao.save(car);
    }

    async createPool(carPool: CarPool): Promise<CarPool> {

        let carPoolEntity = new CarPoolDto();
        carPoolEntity.name = carPool.name.value;
        carPoolEntity.id = carPool.id.props;
        await this.carPoolDao.save(carPoolEntity);
        return this.mapper.toDomain(carPoolEntity);
    }

    async getPool(name: CarPoolName): Promise<CarPool> {
        const pool = await this.carPoolDao.findOne({
            where: {
                name: name.value
            }
        });

        if(pool){
            return this.mapper.toDomain(pool);
        }
        throw new CarPoolNotExist('Pool does not exist !');

    }


}
