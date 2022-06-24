import CarRepository from "../../../application-core/car/ports/car-repository";
import CarId from "../../../shared-kernel/domain/car-id";
import AvailableCar from "../../../application-core/car/domain/available-car";
import Car from "../../../application-core/car/domain/car";
import CarDto from "./car-dto";
import RentedCar from "../../../application-core/car/domain/rented-car";
import {Repository} from "typeorm";
import CarPoolNotExist from "../../../../car-registration/application-core/car-pool/domain/car-pool-not-exist";

export default class CarPgRepository implements CarRepository {

    constructor(private carDao: Repository<CarDto>) {
    }

    async findAvailableCarById(carId: CarId): Promise<AvailableCar> {
        const car = await this.carDao.findOneBy({
            id: carId.props,
            status: "available"
        })

        if (car) {
            //mapper
            return AvailableCar.load(new CarId(car.id), car.type);
        }
        throw new Error("available car not found")
    }

    async findCarById(carId: CarId): Promise<Car> {
        const car = await this.carDao.findOneBy({
            id: carId.props,
        })

        if (car) {
            return Car.create(new CarId(car.id), car.type);
        }
        throw new Error("")
    }

    async updateCar(carDomain: Car): Promise<void> {

        const carDto = new CarDto();
        carDto.id = carDomain.id.props;
        carDto.type = carDomain.type;
        //...

        if(carDomain instanceof AvailableCar){
            carDto.status = "available"
        }
        else if(carDomain instanceof RentedCar){
            carDto.status = "rented"
        }
        await this.carDao.save(carDto);
    }


}
