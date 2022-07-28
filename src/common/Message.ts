import { Uuid } from './Uuid';

export class Message<T = any> {
  readonly id: string;
  readonly name: string;
  readonly timestamp: Date;

  constructor(readonly payload: T) {
    this.id = Uuid.generate().toString();
    this.name = this.constructor.name;
    this.timestamp = new Date();
  }
}
