export abstract class DomainEntity<ValueObjectId> {
  constructor(protected readonly id: ValueObjectId) {
  }

  equals(entity: DomainEntity<ValueObjectId>) {
    return this.id === entity.id;
  }
}
