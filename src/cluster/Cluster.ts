import { Logger } from '@nestjs/common';
import * as os from 'node:os';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cluster = require('node:cluster');

export class Cluster {
  protected static logger = new Logger(Cluster.name);

  // tslint:disable-next-line:ban-types
  public static run(
    masterInit: () => any,
    workerInit: () => any,
    options?: {
      workers?: number;
    },
  ): void {
    const workers = options?.workers ?? os.cpus().length;

    if (cluster.isPrimary && workers > 0) {
      for (let i = 0; i < workers; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker: any, code: any, signal: any) => {
        Cluster.logger.log(`Worker ${worker.process.pid} closed with ${code}:${signal}`);
        if (!worker.exitedAfterDisconnect) {
          Cluster.logger.log('Recreating worker...');
          cluster.fork();
        }
      });

      masterInit();
    } else {
      workerInit();
    }
  }

  public static isPrimary(): boolean {
    return cluster && cluster.isPrimary;
  }
}
