import {ValueObject} from "./value-object";

export abstract class DomainEntity<ValueObjectId> extends ValueObject<ValueObjectId> {
  constructor(protected readonly id: ValueObjectId) {
    super(id);
  }
}
