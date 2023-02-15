import CarPoolFactory from "../../../car-pool-factory";
import {AppDataSource} from "../../../../data-source";
import {DataSource} from "typeorm";
import CarName from "../domain/car-name";
import connection from "../../../../../tests/utils/connection";
import CarDtoPg from "../../../infrastructure/postgres/car-pool/car/car-dto";
import UpdateCar from "./update-car";
import VehicleIdentificationNumber from "../domain/vehicle-identification-number";

describe(`${UpdateCar.name}`, () => {
    let useCase: UpdateCar;
    let init: DataSource;
    beforeAll(async ()=>{
        await connection.create();
    });

    afterAll(async ()=>{
        await connection.close();
    });

    beforeEach(async () => {
        await connection.clear();
        useCase = new UpdateCar(CarPoolFactory.carRepository());
    });

    it('should update a car', async () => {
        // Given
        const carEntity = new CarDtoPg();
        carEntity.id = "VFS1V2009ASIV2009";
        carEntity.brand = "Citroen";
        carEntity.name = "C4 Picasso";

        // save car
        const carSaved = await AppDataSource.getRepository(CarDtoPg)
            .save(carEntity)

        // When
        await useCase.update({
            carId: VehicleIdentificationNumber.create(carSaved.id),
            carName: new CarName('C3 Aircross')
        });

        // Then
        const carUpdated = await AppDataSource.getRepository(CarDtoPg).findOne({
            where: {
                id: carSaved.id
            }
        });

        expect(carUpdated).toEqual(
            expect.objectContaining({
                brand: 'Citroen',
                id: carEntity.id,
                name: 'C3 Aircross'
            })
        );
    })
})

