import CarPoolRepository from "../../../../application-core/ports/car-pool-repository";
import {Repository} from "typeorm";
import {CarPoolDto} from "./car-pool-dto";
import CarName from "../../../../application-core/car-pool/domain/car-name";
import CarPool from "../../../../application-core/car-pool/domain/car-pool";
import {CarPoolName} from "../../../../application-core/car-pool/domain/car-pool-name";
import CarPoolMapper from "./car-pool-mapper";
import CarDto from "../car/car-dto";
import CarPoolId from "../../../../application-core/car-pool/domain/car-pool-id";
import CarPoolNotExist from "../../../../application-core/car-pool/domain/car-pool-not-exist";
import Car from "../../../../application-core/car-pool/domain/car";


export default class CarPoolPgRepository implements CarPoolRepository {

    constructor(
        private carPoolDao: Repository<CarPoolDto>,
        private carDao: Repository<CarDto>,
        private mapper: CarPoolMapper) {
    }

    async addCar(poolId: CarPoolId, name: CarName): Promise<void> {
        //get Pool

        const carPool = await this.getPoolById(poolId);
        let carPoolEntity = new CarPoolDto();
        carPoolEntity.name = carPool.name.value;
        carPoolEntity.id = carPool.id.props;


        let car = new CarDto();
        car.name = name.value;
        car.poolId = carPoolEntity
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
                },
                relations: ['cars']
            }
        );

        if (pool) {
            return this.mapper.toDomain(pool);
        }
        throw new CarPoolNotExist('Pool does not exist !');

    }

    async getPoolById(id: CarPoolId): Promise<CarPool> {
        const pool = await this.carPoolDao.findOne({
            where: {
                id: id.props
            },
            relations: ['cars']
        });

        if (pool) {
            return this.mapper.toDomain(pool);
        }
        throw new CarPoolNotExist('Pool does not exist !');
    }

    async updateCar(car: Car): Promise<void> {

        const carToUpdate = await this.carDao.findOneBy({
            id: car.carId.props,
        })
        carToUpdate.name = car.carName.value;
        carToUpdate.brand = car.carBrand.value;

        await this.carDao.save(carToUpdate);

    }


}
