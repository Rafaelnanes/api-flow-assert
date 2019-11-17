import { Message } from './message';
import { PostProcessor } from './post-processor';

export class Step {

    constructor(public name: string, public message?: Message, public postProcessor?: PostProcessor) { }
}
