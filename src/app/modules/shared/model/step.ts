import { Message } from './message';
import { Assertion } from './assertion';
import { PostProcessor } from './post-processor';

export class Step {

    constructor(public name: string, public message?: Message, public assertion?: Assertion, public postProcessor?: PostProcessor) { }
}
