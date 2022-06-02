import CarPoolId from "../domain/car-pool-id";
import CarId from "../domain/car-id";
import CarName from "../domain/car-name";
import CarBrand from "../domain/car-brand";


export default interface UpdateCarDto {

    carPoolId: CarPoolId;
    carId: CarId;
    carName?: CarName;
    carBrand?: CarBrand;




}
