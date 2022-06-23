import CarPoolId from "../car-pool/domain/car-pool-id";
import CarPool from "../car-pool/domain/car-pool";
import {CarPoolName} from "../car-pool/domain/car-pool-name";
import Car from "../car-pool/domain/car";


export default interface CarPoolRepository{

    addCar(poolId : CarPoolId, car: Car): void;
    updateCar(car: Car): Promise<void>;
    createPool(carPool: CarPool): Promise<CarPool>;
    getPool(name: CarPoolName): Promise<CarPool>;
    getPoolById(id: CarPoolId): Promise<CarPool>;


}
