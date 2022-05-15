import CarPool from "../../../../application-core/domain/car-pool";
import {CarPoolDto} from "./car-pool-dto";
import {CarPoolName} from "../../../../application-core/domain/car-pool-name";
import CarPoolId from "../../../../application-core/domain/car-pool-id";


export default class CarPoolMapper{

    toDomain(dto: CarPoolDto): CarPool {
        return CarPool.create(new CarPoolId(dto.id), new CarPoolName(dto.name))
    }
}
