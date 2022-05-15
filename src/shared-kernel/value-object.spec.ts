import {Period} from "./utils/date/period";
import {ValueObject} from "./value-object";

describe(`${Period.name}`, ()=>{

    class User extends ValueObject<{name: string, age: number}>{
        constructor(public name: string, public age: number) {
            super({name, age});
        }
    }


    it('should verify equality between two value object', ()=> {
        // Given
        const john = new User('Johan',40);
        const johnBis = new User('Johan',40);

        // When
        const expected = john.equals(johnBis);

        // Then
        expect(expected).toBeTruthy()
    })

    it('should verify inequality between two value object', ()=> {
        // Given
        const john = new User('Johan',40);
        const mike = new User('Mike',40);

        // When
        const expected = john.equals(mike);

        // Then
        expect(expected).toBeFalsy()
    })
});
