import { Command } from '../..';
/**
 *
 * @category Commands
 */
export default class Node extends Command {
    /** @internal */
    constructor();
    /** @internal */
    stop(): Promise<void>;
    /** @internal */
    start(): Promise<any>;
    /** @internal */
    exec(): Promise<void>;
}
