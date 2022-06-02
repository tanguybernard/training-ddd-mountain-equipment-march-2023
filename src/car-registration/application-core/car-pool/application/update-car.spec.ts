import CarPoolFactory from "../../../car-pool-factory";
import {CarPoolName} from "../domain/car-pool-name";
import {AppDataSource} from "../../../../data-source";
import {DataSource} from "typeorm";
import CarName from "../domain/car-name";
import connection from "../../../../../tests/utils/connection";
import {CarPoolDto} from "../../../infrastructure/postgres/car-pool/pool/car-pool-dto";
import {v4 as uuidv4} from "uuid";
import CarDtoPg from "../../../infrastructure/postgres/car-pool/car/car-dto";
import UpdateCar from "./update-car";
import CarId from "../domain/car-id";
import CarPoolId from "../domain/car-pool-id";

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
        useCase = new UpdateCar(CarPoolFactory.carPoolRepository());
    });

    it('should update a car', async () => {
        // Given
        const carName = new CarName('C3');
        const poolName = new CarPoolName('Family Car');

        const carPoolEntity = new CarPoolDto();

        carPoolEntity.id = uuidv4();
        carPoolEntity.name = poolName.value


        //save pool
        const res = await AppDataSource.getRepository(CarPoolDto)
            .save(carPoolEntity);


        const carEntity = new CarDtoPg();
        carEntity.id = uuidv4();
        carEntity.brand = "Citroen";
        carEntity.poolId = res
        carEntity.name = "C4 Picasso";


        // save car
        const carSaved = await AppDataSource.getRepository(CarDtoPg)
            .save(carEntity)


        console.log(carSaved.id)

        // When
        await useCase.update({
            carId: new CarId(carSaved.id),
            carPoolId: new CarPoolId(res.id),
            carName: new CarName('C3 Aircross')
        });

        // Then
        const carUpdated = await AppDataSource.getRepository(CarDtoPg).findOne({
            where: {
                id: carSaved.id
            }
        });

        console.log("UPDATED SPEC", carUpdated)

        expect(carUpdated).toEqual(
            expect.objectContaining({
                brand: 'Citroen',
                id: carEntity.id,
                name: 'C3 Aircross'
            })
        );
    })
})

