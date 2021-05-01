import { Command, CommandProps } from '../..';
/**
 *
 * @category Commands
 */
export default class Content extends Command {
    /** @internal */
    constructor(p?: CommandProps);
    /** @internal */
    exec(): Promise<void>;
}
