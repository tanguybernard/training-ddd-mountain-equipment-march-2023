import Car from "../domain/car";
import CarId from "../../../shared-kernel/domain/car-id";
import AvailableCar from "../domain/available-car";


export default interface CarRepository {

    findCarById(carId: CarId): Promise<Car>
    findAvailableCarById(carId: CarId): Promise<AvailableCar>
    updateCar(car: Car): Promise<void>;
}
