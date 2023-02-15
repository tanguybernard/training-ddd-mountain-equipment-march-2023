
import DriverRepository from "../../../application-core/ports/driver-repository";
import DriverId from "../../../application-core/driver/domain/driver-id";
import Driver from "../../../application-core/driver/domain/driver";
import {Repository} from "typeorm";
import DriverDto from "./driver-dto";
import CarDto from "../car/car-dto";
import Car from "../../../application-core/car/domain/car";
import CarId from "../../../shared-kernel/domain/car-id";
import {DriverMapper} from "./driver-mapper";

export default class DriverPgRepository implements DriverRepository {

    constructor(private driverDao: Repository<DriverDto>, private mapper: DriverMapper) {
    }


    async findById(driverId: DriverId): Promise<Driver> {
        const driver = await this.driverDao.findOne({
            where: {
                id: driverId.props,
            },
            relations: ['car']

        })
        return this.mapper.toDomain(driver);

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

    async create(driver: Driver): Promise<Driver> {

        const driverDto = new DriverDto();
        driverDto.id = driver.driverId.id;
        driverDto.name = driver.name;
        driverDto.license = driver.licenseNumber;
        driverDto.age = driver.age;
        await this.driverDao.save(driverDto);

        return Promise.resolve(driver);
    }

    async findByLicense(license: string): Promise<Driver> {
        const driverDto = await this.driverDao.findOne({
            where: {
                license: license,
            },
            relations: ['car']

        })

        return this.mapper.toDomain(driverDto);
    }

}
