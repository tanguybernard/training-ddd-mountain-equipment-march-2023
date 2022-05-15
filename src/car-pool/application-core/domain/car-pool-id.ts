import {ValueObjectId} from "../../../shared-kernel/value-object-id";

export default class CarPoolId extends ValueObjectId<string> {

    constructor(private value: string) {
        super(value);
    }

}
