export declare class Uuid {
    private readonly value;
    private constructor();
    static generate(): Uuid;
    static fromString(value: string): Uuid;
    static valid(value: string): boolean;
    equals(other: Uuid | string): boolean;
    toString(): string;
    toJSON(): string;
}
