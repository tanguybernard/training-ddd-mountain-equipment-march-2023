import {DomainEvent} from "./domain-event";

export class DomainEvents {
    private static handlersMap = {};

    public static register(
        callback: (event: DomainEvent) => void,
        eventClassName: string
    ): void {

        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);

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
            const handlers: any[] = this.handlersMap[eventClassName];
            for (let handler of handlers) {
                handler(event);
            }
        }
    }


}
