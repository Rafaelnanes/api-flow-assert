import { Request, Folder } from './..';

export class CollectionGroup {
    constructor(public id: string, public requests?: Request[], public folders?: Folder[]) { }
}