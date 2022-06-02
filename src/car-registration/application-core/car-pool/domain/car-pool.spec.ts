import {CarPoolName} from "./car-pool-name";
import CarPool from "./car-pool";
import CarPoolId from "./car-pool-id";


describe(`${CarPool.name}`, () => {

    it('should be equal if two car Pool have the same id', async () => {

        const carPoolFamily = CarPool.create(
            new CarPoolId("123"),
            new CarPoolName('Family Cars')
        );
        const carPoolBusiness = CarPool.create(new CarPoolId("123"), new CarPoolName('Business Cars'));

        expect(carPoolFamily.equals(carPoolBusiness)).toBeTruthy();

    })

    it('should not be equal if two car Pool have not the same id', async () => {

        const carPoolFamily = CarPool.create(new CarPoolId("123"), new CarPoolName('Family Cars'));
        const carPoolBusiness = CarPool.create(new CarPoolId("124"), new CarPoolName('Family Cars'));

        expect(carPoolFamily.equals(carPoolBusiness)).toBeFalsy();

    })
})

