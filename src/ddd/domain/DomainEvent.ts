import { Event } from '../../cqrs/types';
import { AggregateRoot } from './AggregateRoot';

export type DomainEventPaylod<T extends AggregateRoot = AggregateRoot> = {
  aggregate: T;
};

export class DomainEvent<T extends DomainEventPaylod = DomainEventPaylod> extends Event<T> {}
