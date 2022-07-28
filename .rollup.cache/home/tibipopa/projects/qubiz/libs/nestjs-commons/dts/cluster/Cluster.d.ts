import { Logger } from '@nestjs/common';
export declare class Cluster {
    protected static logger: Logger;
    static run(masterInit: () => any, workerInit: () => any, options?: {
        workers?: number;
    }): void;
    static isPrimary(): boolean;
}
