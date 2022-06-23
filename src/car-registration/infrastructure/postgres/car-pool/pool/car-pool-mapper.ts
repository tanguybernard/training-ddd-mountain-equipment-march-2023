import CarPool from "../../../../application-core/car-pool/domain/car-pool";
import {CarPoolDto} from "./car-pool-dto";
import {CarPoolName} from "../../../../application-core/car-pool/domain/car-pool-name";
import CarPoolId from "../../../../application-core/car-pool/domain/car-pool-id";
import Car from "../../../../application-core/car-pool/domain/car";
import CarId from "../../../../application-core/car-pool/domain/car-id";
import CarName from "../../../../application-core/car-pool/domain/car-name";
import CarBrand from "../../../../application-core/car-pool/domain/car-brand";


export default class CarPoolMapper{

    toDomain(dto: CarPoolDto): CarPool {
        return CarPool.create(
            new CarPoolId(dto.id), new CarPoolName(dto.name),
            dto.cars?.map(
                car => Car.create(
                    new CarId(car.id),
                    new CarName(car.name),
                    new CarBrand(car.brand),
                    new Date()
                )
            )
        )
    }
}
