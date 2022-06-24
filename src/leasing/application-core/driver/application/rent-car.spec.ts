import connection from "../../../../../tests/utils/connection";
import RentCar from "./rent-car";
import LeasingFactory from "../../../leasing-factory";
import {v4 as uuidv4} from "uuid";
import {AppDataSource} from "../../../../data-source";
import CarDto, {LeasingStatus} from "../../../infrastructure/postgres/car/car-dto";
import DriverDto from "../../../infrastructure/postgres/driver/driver-dto";
import DriverId from "../domain/driver-id";
import CarId from "../../../shared-kernel/domain/car-id";
import {DomainEvents} from "../../../../shared-kernel/domain-event-dispatching/domain-events";
import CarRentedEventHandler from "../../car/application/event-handlers/car-rented-event-handler";
import CarPgRepository from "../../../infrastructure/postgres/car/car-repository";
import CarDao from "../../../infrastructure/postgres/car/car-dao";
import CarRentedEvent from "../domain/events/car-rented-event";

describe(`${RentCar.name}`, () => {
    let useCase: RentCar;
    beforeAll(async () => {
        await connection.create();
    });

    afterAll(async () => {
        await connection.close();
    });

    beforeEach(async () => {
        await connection.clear();
        useCase = LeasingFactory.useCaseRentCar();
    });


    it( 'rent car for driver', async () => {

        //BEFORE
        const driver = new DriverDto();
        driver.id = uuidv4()
        driver.name = 'John';
        driver.age = 36;

        const car = new CarDto();
        car.name = "C4 Picassor";
        car.type = "City";
        car.id = uuidv4();
        car.status = LeasingStatus.AVAILABLE;

        await AppDataSource.getRepository(DriverDto)
            .save(driver)
        await AppDataSource.getRepository(CarDto)
            .save(car);
        DomainEvents.register(new CarRentedEventHandler(new CarPgRepository(CarDao)), CarRentedEvent.name);

        //WHEN
        await useCase.rentCar(new DriverId(driver.id), new CarId(car.id));

        //THEN
        //wait 2sec domain event is treated... TODO maybe check with some mechanism that domain event transaction finished well
        await new Promise((r) => setTimeout(r, 1000));

        const driverFound = await AppDataSource.getRepository(DriverDto).findOne({where: {
                id: driver.id
            },
            relations: ['car']
        })

        expect(driverFound).toHaveProperty('age',36);
        expect(driverFound.car.status).toEqual("rented");
    })

});
