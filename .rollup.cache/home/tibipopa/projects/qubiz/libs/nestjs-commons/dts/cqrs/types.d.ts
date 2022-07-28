import { ICommand, IEvent, IQuery } from '@nestjs/cqrs';
import { Message } from '../common/Message';
export declare class Command<T = any> extends Message<T> implements ICommand {
}
export declare class Query<T = any> extends Message<T> implements IQuery {
}
export declare class Event<T = any> extends Message<T> implements IEvent {
}
