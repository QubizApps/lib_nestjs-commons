import { Event } from '../../cqrs/types';
import { AggregateRoot } from './AggregateRoot';
export declare class DomainEvent<T = any> extends Event<T> {
    readonly aggregateId: string;
    readonly aggregateName: string;
    constructor(aggregate: AggregateRoot, payload: T);
}
