import { ICommand, IEvent, IQuery } from '@nestjs/cqrs';

import { Message } from '../common/Message';

export class Command<T = any> extends Message<T> implements ICommand {}
export class Query<T = any> extends Message<T> implements IQuery {}
export class Event<T = any> extends Message<T> implements IEvent {}
