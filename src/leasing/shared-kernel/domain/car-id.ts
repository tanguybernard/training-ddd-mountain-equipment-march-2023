import {ValueObjectId} from "../../../shared-kernel/value-object-id";

export default class CarId extends ValueObjectId<string> {

    constructor(private value: string) {
        super(value);
    }

}
