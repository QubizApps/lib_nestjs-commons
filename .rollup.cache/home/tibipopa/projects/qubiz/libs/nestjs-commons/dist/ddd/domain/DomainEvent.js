import { Event } from '../../cqrs/types';
export class DomainEvent extends Event {
    constructor(aggregate, payload) {
        super(payload);
        this.aggregateId = aggregate.id.toString();
        this.aggregateName = aggregate.constructor.name;
    }
}
//# sourceMappingURL=DomainEvent.js.map