import { AggregateRoot as NestAggregateRoot } from '@nestjs/cqrs';
import { DomainEvent } from './DomainEvent';
export declare type AggregateRootState<T = any> = {
    id: T;
};
export declare type AggregateRootConstructor<I, S extends AggregateRootState<I>, T extends AggregateRoot<I, S>> = {
    new (state: S): T;
};
export declare abstract class AggregateRoot<I = any, S extends AggregateRootState<I> = AggregateRootState> extends NestAggregateRoot<DomainEvent> {
    protected _state: S;
    private constructor();
    static fromState<I, S extends AggregateRootState<I>, T extends AggregateRoot<I, S>>(this: AggregateRootConstructor<I, S, T>, state: S): T;
    get id(): I;
    get state(): S;
}
