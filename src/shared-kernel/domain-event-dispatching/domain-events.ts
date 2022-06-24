import {DomainEvent} from "./domain-event";
import EventHandler from "../event-handler";

//TODO rename has EventBusPublisher ?
export class DomainEvents {
    private static handlersMap = {};

    public static register(
        subscriber: EventHandler<any>,
        eventClassName: string
    ): void {

        if (!DomainEvents.handlersMap.hasOwnProperty(eventClassName)) {
            DomainEvents.handlersMap[eventClassName] = [];
        }
        DomainEvents.handlersMap[eventClassName].push(subscriber);

    }

    /**
     * @method clearHandlers
     * @static
     * @desc Useful for testing.
     */

    public static clearHandlers(): void {
        DomainEvents.handlersMap = {};
    }

    public static dispatch (event: DomainEvent): void {
        const eventClassName: string = event.constructor.name;


        if (DomainEvents.handlersMap && DomainEvents.handlersMap?.hasOwnProperty(eventClassName)) {
            const handlers: EventHandler<any>[] = DomainEvents.handlersMap[eventClassName];
            for (let handler of handlers) {
                handler.handle(event);
            }
        }
    }


}
