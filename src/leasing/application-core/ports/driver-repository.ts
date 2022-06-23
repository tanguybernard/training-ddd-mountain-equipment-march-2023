import Driver from "../driver/domain/driver";
import DriverId from "../driver/domain/driver-id";


export default interface DriverRepository {

    getById(driverId: DriverId): Driver;

}
