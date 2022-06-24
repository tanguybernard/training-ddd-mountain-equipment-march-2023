import RentCar from "./application-core/driver/application/rent-car";
import CarService from "./application-core/driver/domain/services/car-service";
import DriverPgRepository from "./infrastructure/postgres/driver/driver-repository";
import CarPgRepository from "./infrastructure/postgres/car/car-repository";
import DriverDao from "./infrastructure/postgres/driver/driver-dao";
import CarDao from "./infrastructure/postgres/car/car-dao";


export default class LeasingFactory {

    public static useCaseRentCar(): RentCar {
        return new RentCar(new CarService(), new DriverPgRepository(DriverDao), new CarPgRepository(CarDao));
    }

}
