import { AggregateRoot as NestAggregateRoot } from '@nestjs/cqrs';
import * as _ from 'lodash';
export class AggregateRoot extends NestAggregateRoot {
    constructor(_state) {
        super();
        this._state = _state;
        this.autoCommit = false;
    }
    static fromState(state) {
        return new this(_.cloneDeep(state));
    }
    get id() {
        return this._state.id;
    }
    get state() {
        return _.cloneDeep(this._state);
    }
}
//# sourceMappingURL=AggregateRoot.js.map