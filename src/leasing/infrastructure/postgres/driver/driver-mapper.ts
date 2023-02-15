import DriverDto from "./driver-dto";
import Driver from "../../../application-core/driver/domain/driver";
import Car from "../../../application-core/car/domain/car";
import CarId from "../../../shared-kernel/domain/car-id";
import DriverId from "../../../application-core/driver/domain/driver-id";


export class DriverMapper {

    toDomain(driverDto: DriverDto): Driver {
        return Driver.load(
            new DriverId(driverDto.id),
            driverDto.name,
            driverDto.license,
            driverDto.age,
            this.assignCar(driverDto)
            );
    }

    assignCar(driverDto){
        return driverDto.car ?  Car.create(
            new CarId(driverDto.car.id),
            driverDto.car.type)
    : null;
    }
}
