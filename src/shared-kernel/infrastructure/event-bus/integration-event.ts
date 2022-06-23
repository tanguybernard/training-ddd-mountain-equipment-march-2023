export default abstract class IntegrationEvent {
    public readonly id: String;
    public readonly occurredOn: Date;

    protected constructor(id: String, occurredOn: Date) {
        this.id = id;
        this.occurredOn = occurredOn;
    }
}
