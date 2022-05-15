import {ValueObject} from "../../../shared-kernel/value-object";

export default class CarName extends ValueObject<string> {

    constructor(readonly value: string) {
        super(value);
    }

}
