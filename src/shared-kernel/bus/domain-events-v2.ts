import {DomainEvent} from "./domain-event";
import EventHandler from "../event-handler";

export class DomainEventsV2 {
    private static handlersMap = {};

    public static register(
        subscriber: EventHandler<any>,
        eventClassName: string
    ): void {

        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(subscriber);

    }

    /**
     * @method clearHandlers
     * @static
     * @desc Useful for testing.
     */

    public static clearHandlers(): void {
        this.handlersMap = {};
    }

    public static dispatch (event: DomainEvent): void {
        const eventClassName: string = event.constructor.name;

        if (this.handlersMap.hasOwnProperty(eventClassName)) {
            const handlers: EventHandler<any>[] = this.handlersMap[eventClassName];
            for (let handler of handlers) {
                handler.handle(event);
            }
        }
    }


}
