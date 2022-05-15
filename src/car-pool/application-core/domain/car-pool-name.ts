import {ValueObject} from "../../../shared-kernel/value-object";

export class CarPoolName extends ValueObject<string>{
    constructor(public value: string) {
        super(value)
    }
}
