import EventEmitter from "events";

export default class LedgerPlatformApduTransport {
    /**
     * low level api to communicate with the device
     * This method is for implementations to implement but should not be directly called.
     * Instead, the recommanded way is to use send() method
     * @param apdu the data to send
     * @return a Promise of response data
     */
    exchange(apdu: Buffer): Promise<Buffer> {
        apdu;
        throw new Error('Function is not implemented yet');
    }

    /**
     * set the "scramble key" for the next exchanges with the device.
     * Each App can have a different scramble key and they internally will set it at instanciation.
     * @param key the scramble key
     */
    setScrambleKey(_key: string) {
        _key;
        throw new Error('Function is not implemented yet');
    }

    /**
     * close the exchange with the device.
     * @return a Promise that ends when the transport is closed.
     */
    close(): Promise<void> {
        throw new Error('Function is not implemented yet');
    }

    _events = new EventEmitter();

    /**
     * Listen to an event on an instance of transport.
     * Transport implementation can have specific events. Here is the common events:
     * * `"disconnect"` : triggered if Transport is disconnected
     */
    on(eventName: string, cb: (...args: Array<any>) => any): void {
        this._events.on(eventName, cb);
    }

    /**
     * Stop listening to an event on an instance of transport.
     */
    off(eventName: string, cb: (...args: Array<any>) => any): void {
        this._events.removeListener(eventName, cb);
    }

    /**
     * Enable or not logs of the binary exchange
     */
    setDebugMode() {
        throw new Error('Function is not implemented yet');
    }

    /**
     * Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)
     */
    setExchangeTimeout(exchangeTimeout: number): void {
        exchangeTimeout;
        throw new Error('Function is not implemented yet');
    }

    /**
     * Define the delay before emitting "unresponsive" on an exchange that does not respond
     */
    setExchangeUnresponsiveTimeout(unresponsiveTimeout: number): void {
        unresponsiveTimeout;
        throw new Error('Function is not implemented yet');
    }

    /**
     * wrapper on top of exchange to simplify work of the implementation.
     * @param cla
     * @param ins
     * @param p1
     * @param p2
     * @param data
     * @param statusList is a list of accepted status code (shorts). [0x9000] by default
     * @return a Promise of response buffer
     */
    send = async (
        cla: number,
        ins: number,
        p1: number,
        p2: number,
        data: Buffer = Buffer.alloc(0),
        statusList: Array<number> = [0x9000]
    ): Promise<Buffer> => {
        cla;
        ins;
        p1;
        p2;
        data;
        statusList;
        throw new Error('Function is not implemented yet');
    };
}