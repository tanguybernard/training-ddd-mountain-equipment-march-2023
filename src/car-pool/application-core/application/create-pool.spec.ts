import {CreatePool} from "./create-pool";
import CarPoolFactory from "../../car-pool-factory";
import {CarPoolName} from "../domain/car-pool-name";
import {DataSource} from "typeorm";
import connection from "../../../../tests/utils/connection";



//TODO rename file into integration.ts ?

describe(`${CreatePool.name}`, () => {
    let useCase: CreatePool;
    let init: DataSource;

    beforeAll(async ()=>{
        await connection.create();
    });

    afterAll(async ()=>{
        await connection.close();
    });
    beforeEach(async () => {

        await connection.clear();
        useCase = new CreatePool(CarPoolFactory.carPoolRepository());

    });

    it('should create a new car pool', async () => {
        // Given
        const name = new CarPoolName('SuperCar');

        // When
        const newPool = await useCase.create(name);

        // Then
        expect(newPool).toBeDefined()
        expect(newPool.name.equals(name)).toBeTruthy();
    })
})
