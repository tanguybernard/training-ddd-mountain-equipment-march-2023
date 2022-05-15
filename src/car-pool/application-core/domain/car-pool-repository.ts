import {CarPoolName} from "./car-pool-name";
import CarPool from "./car-pool";
import CarName from "./car-name";
import CarPoolId from "./car-pool-id";


export default interface CarPoolRepository{

    addCar(poolId : CarPoolId, name: CarName): void;
    createPool(carPool: CarPool): Promise<CarPool>;
    getPool(name: CarPoolName): Promise<CarPool>;


}
