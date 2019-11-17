import { Step } from './step';

export class Flow {
    constructor(public id: string, public description: string, public steps: Step[]) { }
}