import {ValueObjectId} from "../../../../shared-kernel/value-object-id";
import VinIncorrect from "./vin-incorrect";

export default class VehicleIdentificationNumber extends ValueObjectId<string> {

    private constructor(private value: string) {
        super(value);
    }

    static create(vin: string){
        if(vin.length !== 17){
            throw new VinIncorrect(vin);
        }
        return new VehicleIdentificationNumber(vin);
    }



}
