import CarPoolFactory from "../../../car-pool-factory";
import {CarPoolName} from "../domain/car-pool-name";
import {AppDataSource} from "../../../../data-source";
import {DataSource} from "typeorm";
import AddCar from "./add-car";
import CarName from "../domain/car-name";
import connection from "../../../../../tests/utils/connection";
import {CarPoolDto} from "../../../infrastructure/postgres/car-pool/pool/car-pool-dto";
import {v4 as uuidv4} from "uuid";
import CarDto from "../../../infrastructure/postgres/car-pool/car/car-dto";
import CarBrand from "../domain/car-brand";
import {RabbitEventBus} from "../../../infrastructure/bus/RabbitEventBus";

describe(`${AddCar.name}`, () => {
    let useCase: AddCar;
    let init: DataSource;
    beforeAll(async ()=>{
        await connection.create();
    });

    afterAll(async ()=>{
        await connection.close();
    });

    beforeEach(async () => {
        await connection.clear();
        useCase = new AddCar(CarPoolFactory.carPoolRepository(), new RabbitEventBus());
    });

    it('should throw an exception if car pool does not exist', async () => {
        // Given
        const name = new CarName('Fiat Punto');
        const brand = new CarBrand('Fiat');
        // When
        try {
            await useCase.add(new CarPoolName('Family Car'),name, brand);
        }
        catch (e){
            // Then
            expect(e.message).toEqual('Pool does not exist !');

        }
    })

    it('should add a car to the pool', async () => {
        // Given
        const carName = new CarName('C4');
        const carBrand = new CarBrand('Citroen');

        const poolName = new CarPoolName('Family Car');
        const carPoolEntity = new CarPoolDto();
        carPoolEntity.id = uuidv4()
        carPoolEntity.name = 'Family Car';

        await AppDataSource.getRepository(CarPoolDto)
            .save(carPoolEntity)

        // When
        await useCase.add(poolName, carName, carBrand);

        // Then
        const dtoCar = await AppDataSource.getRepository(CarDto).findOne({
            where: {
                poolId: carPoolEntity
            }
        })
        expect(dtoCar).toEqual(
            expect.objectContaining({
                name: 'C4',
                brand: null
            })
        );
    })
})

