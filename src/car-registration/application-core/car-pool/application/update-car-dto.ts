import VehicleIdentificationNumber from "../domain/vehicle-identification-number";
import CarName from "../domain/car-name";
import CarBrand from "../domain/car-brand";


export default interface UpdateCarDto {
    carId: VehicleIdentificationNumber;
    carName?: CarName;
    carBrand?: CarBrand;




}
