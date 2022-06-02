import UpdatedCarEvent from "../../../application-core/car-pool/domain/updated-car-event";
import {DomainHandle} from "../../../../shared-kernel/bus/domain-handle";
import {DomainEvents} from "../../../../shared-kernel/bus/domain-events";

export class AfterCarUpdatedSubscriber implements DomainHandle<UpdatedCarEvent> {
    //private notifySlackChannel: NotifySlackChannel;

    constructor (/*notifySlackChannel: NotifySlackChannel*/) {
        this.setupSubscriptions();
        //this.notifySlackChannel = notifySlackChannel;
    }

    setupSubscriptions(): void {
        // Register to the domain event
        DomainEvents.register(this.onCarUpdatedEvent.bind(this), UpdatedCarEvent.name);
    }


    // This is called when the domain event is dispatched.
    private async onCarUpdatedEvent (event: UpdatedCarEvent): Promise<void> {
/*
        try {
            await this.notifySlackChannel.execute({
                channel: 'growth',
                message: this.craftSlackMessage(user)
            })
        } catch (err) {

        }*/
    }
}
