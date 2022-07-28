export declare class Message<T = any> {
    readonly payload: T;
    readonly id: string;
    readonly name: string;
    readonly timestamp: Date;
    constructor(payload: T);
}
