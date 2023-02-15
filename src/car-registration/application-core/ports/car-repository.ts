import Car from "../car-pool/domain/car";
import VehicleIdentificationNumber from "../car-pool/domain/vehicle-identification-number";


export default interface CarRepository {

    addCar(car: Car): void;

    getCar(carId: VehicleIdentificationNumber): Promise<Car>;
    updateCar(car: Car): Promise<void>;

    carCanBeRented(car: Car): Promise<void>


}
