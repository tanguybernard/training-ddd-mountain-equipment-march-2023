
import DriverRepository from "../../../application-core/ports/driver-repository";
import DriverId from "../../../application-core/driver/domain/driver-id";
import Driver from "../../../application-core/driver/domain/driver";
import {Repository} from "typeorm";
import DriverDto from "./driver-dto";
import CarDto from "../car/car-dto";

export default class DriverPgRepository implements DriverRepository {

    constructor(private driverDao: Repository<DriverDto>) {
    }


    async findById(driverId: DriverId): Promise<Driver> {
        const driver = await this.driverDao.findOne({
            where: {
                id: driverId.props,
            },
            relations: ['car']

        })
        return Driver.create(new DriverId(driver.id), driver.name, "123", driver.age);

    }

    async update(driver: Driver): Promise<void> {
        const driverToUpdate = await this.driverDao.findOneBy({
            id: driver.driverId.props,
        })

        const carDto = new CarDto();
        carDto.id = driver.car.id.props;

        driverToUpdate.age = driver.age;
        driverToUpdate.car = carDto;

        await this.driverDao.save(driverToUpdate);
    }



}
