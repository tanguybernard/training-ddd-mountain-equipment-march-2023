import CarPoolFactory from "../../../car-pool-factory";
import {AppDataSource} from "../../../../data-source";
import AddCar from "./add-car";
import CarName from "../domain/car-name";
import connection from "../../../../../tests/utils/connection";
import CarDto from "../../../infrastructure/postgres/car-pool/car/car-dto";
import CarBrand from "../domain/car-brand";
import {RabbitEventBus} from "../../../infrastructure/bus/RabbitEventBus";

describe(`${AddCar.name}`, () => {
    let useCase: AddCar;
    beforeAll(async ()=>{
        await connection.create();
    });

    afterAll(async ()=>{
        await connection.close();
    });

    beforeEach(async () => {
        await connection.clear();
        useCase = new AddCar(CarPoolFactory.carRepository(), new RabbitEventBus());
    });

    it('should throw an exception if car already exist', async () => {
        // Given
        const name = new CarName('Fiat Punto');
        const brand = new CarBrand('Fiat');
        await useCase.add("VFS1V2009ASIV2009",name, brand);

        // When
        try {
            await useCase.add("VFS1V2009ASIV2009",name, brand);
        }
        catch (e){
            // Then
            expect(e.message).toEqual('Car already exist !');

        }
    })

    it('should add a car', async () => {
        // Given
        const carName = new CarName('C4');
        const carBrand = new CarBrand('Citroen');


        // When
        await useCase.add("VFS1V2009ASIV2009", carName, carBrand);

        // Then
        const dtoCar = await AppDataSource.getRepository(CarDto).findOne({
            where: {
                id: "VFS1V2009ASIV2009"
            }
        })
        expect(dtoCar).toEqual(
            expect.objectContaining({
                id: "VFS1V2009ASIV2009",
                name: 'C4',
                brand: null
            })
        );
    })
})

