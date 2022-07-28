import { Event } from '../../cqrs/types';
import { AggregateRoot } from './AggregateRoot';

export class DomainEvent<T = any> extends Event<T> {
  readonly aggregateId: string;
  readonly aggregateName: string;

  constructor(aggregate: AggregateRoot, payload: T) {
    super(payload);

    this.aggregateId = aggregate.id.toString();
    this.aggregateName = aggregate.constructor.name;
  }
}
