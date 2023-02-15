import CarRepository from "../../../../application-core/ports/car-repository";
import {Repository} from "typeorm";
import CarDto from "./car-dto";
import Car from "../../../../application-core/car-pool/domain/car";
import VehicleIdentificationNumber from "../../../../application-core/car-pool/domain/vehicle-identification-number";
import CarMapper from "./car-mapper";
import CarNotFound from "../../../../application-core/car-pool/domain/car-not-found";
import CarAlreadyExist from "../../../../application-core/car-pool/domain/car-already-exist";


export default class CarPgRepository implements CarRepository {

    constructor(
        private carDao: Repository<CarDto>,
        private mapper: CarMapper) {
    }

    async addCar(carDomain: Car): Promise<void> {

       const savedCar = await this.getCar(carDomain.carId);
       if(savedCar !== null){
           throw new CarAlreadyExist("Car already exist !");
       }

        let car = new CarDto();
        car.id = carDomain.carId.props
        car.name = carDomain.carName.props;
        await this.carDao.save(car);
    }



    async updateCar(car: Car): Promise<void> {

        const carToUpdate = await this.carDao.findOneBy({
            id: car.carId.props,
        })
        carToUpdate.name = car.carName.props;
        carToUpdate.brand = car.carBrand.value;
        carToUpdate.status = car.status

        await this.carDao.save(carToUpdate);

    }

    async carCanBeRented(car: Car): Promise<void> {
        const carToUpdate = await this.carDao.findOneBy({
            id: car.carId.props,
        })
        carToUpdate.name = car.carName.props;
        carToUpdate.brand = car.carBrand.value;
        carToUpdate.status = 'canBeRented'

        await this.carDao.save(carToUpdate);
    }

    async getCar(carId: VehicleIdentificationNumber): Promise<Car|null> {
        const dto = await this.carDao.findOneBy({
            id: carId.props,
        })

        if(dto === null) {
            return null;
        }

        return this.mapper.toDomain(dto);

    }


}
