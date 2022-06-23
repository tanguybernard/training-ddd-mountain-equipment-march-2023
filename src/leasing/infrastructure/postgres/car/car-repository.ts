import CarRepository from "../../../application-core/car/ports/car-repository";
import CarId from "../../../shared-kernel/domain/car-id";
import AvailableCar from "../../../application-core/car/domain/available-car";
import Car from "../../../application-core/car/domain/car";
import CarDto from "./car-dto";
import RentedCar from "../../../application-core/car/domain/rented-car";

export default class CarPgRepository implements CarRepository {
    findAvailableCarById(carId: CarId): Promise<AvailableCar> {
        return Promise.resolve(undefined);
    }

    findCarById(carId: CarId): Promise<Car> {
        return Promise.resolve(undefined);
    }

    updateCar(carDomain: Car): Promise<void> {

        const carDto = new CarDto();
        carDto.id = carDomain.id.props;
        carDto.type = carDomain.type;
        //...

        if(carDomain instanceof AvailableCar){
            carDto.status = "AVAILABLE"
        }
        else if(carDomain instanceof RentedCar){
            carDto.status = "RENTED"
        }
        return;
    }


}
