import { Request } from '..';

export class Folder {
    constructor(public id: string, public requests?: Request[], public folders?: Folder[]) { }
}