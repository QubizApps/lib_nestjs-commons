import { v4 as uuidv4 } from 'uuid';
export class Uuid {
    constructor(value) {
        if (!Uuid.valid(value)) {
            throw new TypeError(`${value} is not a valid UUID`);
        }
        this.value = value;
    }
    static generate() {
        return new Uuid(uuidv4());
    }
    static fromString(value) {
        return new Uuid(value);
    }
    static valid(value) {
        return new RegExp('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}').test(value);
    }
    equals(other) {
        return this.toString() === other.toString();
    }
    toString() {
        return this.value;
    }
    toJSON() {
        return this.value;
    }
}
//# sourceMappingURL=Uuid.js.map