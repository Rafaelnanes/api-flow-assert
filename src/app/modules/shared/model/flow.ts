import { Step } from './step';

export class Flow {
    constructor(public id: string, public name: string, public description: string, public step: Step[]) { }
}