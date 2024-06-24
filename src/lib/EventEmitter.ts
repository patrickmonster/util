import isEqual from 'lodash/isEqual';

/**
 * Listener function type, called when an event has occurred.
 */
export interface Listener<T = unknown> {
    (event: T): void;
}

/**
 * Disposable interface, used to clean up resources.
 */
export interface Disposable {
    dispose(): void;
}

/**
 * EventEmitter class, used to manage events and listeners.
 */
export class EventEmitter<E extends string | number | symbol> {
    private events = new Map<E, Event<any>>();

    /**
     * Attaches a listener function to an event.
     * @param eventName The name of the event.
     * @param listener The function to be called when the event is emitted.
     * @param emitCurrentState Indicates whether the listener should be called with the previous value of the event.
     * @returns A Disposable which can be used to remove the listener.
     */
    public on<T>(eventName: E, listener: Listener<T>, emitCurrentState = true): Disposable {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Event<T>());
        }
        return this.events.get(eventName)!.on(listener, emitCurrentState);
    }

    /**
     * Attaches a listener function to an event that is called only once.
     * @param eventName The name of the event.
     * @param listener The function to be called when the event is emitted.
     */
    public once<T>(eventName: E, listener: Listener<T>): void {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Event<T>());
        }
        this.events.get(eventName)!.once(listener);
    }

    /**
     * Detaches the listener function from an event.
     * @param eventName The name of the event.
     * @param listener The function to be removed from the event's listeners.
     */
    public off<T>(eventName: E, listener: Listener<T>): void {
        if (this.events.has(eventName)) {
            this.events.get(eventName)!.off(listener);
        }
    }

    /**
     * Emits the event with the provided data.
     * @param eventName The name of the event.
     * @param data The data to be passed to the listener functions.
     */
    public emit<T>(eventName: E, data?: T): void {
        if (this.events.has(eventName)) {
            this.events.get(eventName)!.emit(data);
        }
    }

    /**
     * Emits the event with the provided data only if the data has changed.
     * @param eventName The name of the event.
     * @param data The data to be passed to the listener functions.
     */
    public emitIfChanged<T>(eventName: E, data: T): void {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Event<T>());
        }
        this.events.get(eventName)!.emitIfChanged(data);
    }
}

/**
 * Event class, represents a single event within the EventEmitter.
 */
class Event<T> {
    #listeners = new Set<Listener<T>>();
    #listenersOncer = new Set<Listener<T>>();
    #previousData?: T;

    /**
     * Adds a listener to the event.
     * @param listener The listener function to be added.
     * @param emitCurrentState Indicates whether the listener should be called with the previous value of the event.
     * @returns A Disposable which can be used to remove the listener.
     */
    public on(listener: Listener<T>, emitCurrentState = true): Disposable {
        this.#listeners.add(listener);
        if (emitCurrentState && this.#previousData) {
            listener(this.#previousData);
        }
        return {
            dispose: () => this.off(listener),
        };
    }

    /**
     * Adds a listener function to an event that is called only once.
     * @param listener The listener function to be added.
     */
    public once(listener: Listener<T>): void {
        this.#listenersOncer.add(listener);
    }

    /**
     * Detaches the listener function from the event.
     * @param listener The listener function to be removed.
     */
    public off(listener: Listener<T>) {
        this.#listeners.delete(listener);
    }

    /**
     * Emits the event with the provided data.
     * @param data The data to be passed to the listener functions.
     */
    public emit(data: T) {
        this.#listeners.forEach(listener => listener(data));

        if (this.#listenersOncer.size > 0) {
            const toCall = this.#listenersOncer;
            this.#listenersOncer = new Set<Listener<T>>();
            toCall.forEach(listener => listener(data));
        }
        this.#previousData = data;
    }

    /**
     * Emits the event with the provided data only if the data has changed.
     * @param data The data to be passed to the listener functions.
     */
    public emitIfChanged(data: T) {
        if (!isEqual(data, this.#previousData)) {
            this.emit(data);
        }
    }
}
