import DriverId from "../domain/driver-id";


describe(`${DriverId.name}`, () => {



    it( 'expect equal', async () => {

        const id = new DriverId("1234");

        expect(id.id).toEqual("1234");
        expect(id.equals(new DriverId("1234"))).toBeTruthy();
    })

    it( 'expect non equal', async () => {

        const id = new DriverId("1234");
        expect(id.id).toEqual("1234");
        expect(id.equals(new DriverId("1235"))).toBeFalsy();
    })

});
