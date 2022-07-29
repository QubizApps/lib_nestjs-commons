import { AggregateRoot as NestAggregateRoot } from '@nestjs/cqrs';
import * as _ from 'lodash';

import { DomainEvent } from './DomainEvent';

export type AggregateRootState<T = any> = {
  id: T;
};

export type AggregateRootConstructor<
  I,
  S extends AggregateRootState<I>,
  T extends AggregateRoot<I, S>,
> = {
  new (state: S): T;
};

export abstract class AggregateRoot<
  I = any,
  S extends AggregateRootState<I> = AggregateRootState,
> extends NestAggregateRoot<DomainEvent> {
  protected constructor(protected _state: S) {
    super();

    this.autoCommit = false;
  }

  public static fromState<I, S extends AggregateRootState<I>, T extends AggregateRoot<I, S>>(
    this: AggregateRootConstructor<I, S, T>,
    state: S,
  ): T {
    return new this(_.cloneDeep<S>(state));
  }

  public get id(): I {
    return this._state.id;
  }

  public get state(): S {
    return _.cloneDeep<S>(this._state);
  }
}
