import { Event } from '../../cqrs/types';
import { AggregateRoot } from './AggregateRoot';

export class DomainEvent<T = any> extends Event<
  T & { aggregateId: string; aggregateName: string }
> {
  constructor(readonly aggregate: AggregateRoot, payload: T) {
    super({
      ...payload,
      aggregateId: aggregate.id.toString(),
      aggregateName: aggregate.constructor.name,
    });
  }
}
