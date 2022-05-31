import {ValueObject} from "../../../../shared-kernel/value-object";

export default class CarBrand extends ValueObject<string> {

    constructor(readonly value: string) {
        super(value);
    }

}
