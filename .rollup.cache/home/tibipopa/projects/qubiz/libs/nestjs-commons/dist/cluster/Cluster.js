import { Logger } from '@nestjs/common';
import * as os from 'node:os';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cluster = require('node:cluster');
export class Cluster {
    // tslint:disable-next-line:ban-types
    static run(masterInit, workerInit, options) {
        var _a;
        const workers = (_a = options === null || options === void 0 ? void 0 : options.workers) !== null && _a !== void 0 ? _a : os.cpus().length;
        if (cluster.isPrimary && workers > 0) {
            for (let i = 0; i < workers; i++) {
                cluster.fork();
            }
            cluster.on('exit', (worker, code, signal) => {
                Cluster.logger.log(`Worker ${worker.process.pid} closed with ${code}:${signal}`);
                if (!worker.exitedAfterDisconnect) {
                    Cluster.logger.log('Recreating worker...');
                    cluster.fork();
                }
            });
            masterInit();
        }
        else {
            workerInit();
        }
    }
    static isPrimary() {
        return cluster && cluster.isPrimary;
    }
}
Cluster.logger = new Logger(Cluster.name);
//# sourceMappingURL=Cluster.js.map