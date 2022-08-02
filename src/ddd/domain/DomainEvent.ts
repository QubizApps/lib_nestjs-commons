import { Event } from '../../cqrs/types';
import { AggregateRoot } from './AggregateRoot';

export class DomainEvent<A extends AggregateRoot = AggregateRoot, P = any> extends Event<
  P & { aggregateId: A extends AggregateRoot<infer I> ? I : string; aggregateName: string }
> {
  constructor(readonly aggregate: A, payload: P) {
    super({
      ...payload,
      aggregateId: aggregate.id,
      aggregateName: aggregate.constructor.name,
    });
  }
}
