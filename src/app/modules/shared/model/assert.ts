import { AssertStrategy } from './assert-strategy';

export class Assert {
    constructor(public status: number, public assertStrategy: AssertStrategy, public fields: any, public body: any) { }
}