import { Uuid } from './Uuid';
export class Message {
    constructor(payload) {
        this.payload = payload;
        this.id = Uuid.generate().toString();
        this.name = this.constructor.name;
        this.timestamp = new Date();
    }
}
//# sourceMappingURL=Message.js.map