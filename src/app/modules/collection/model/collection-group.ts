import { Request } from './request';
export class CollectionGroup {
    constructor(public id: string, public requests: Request[]) { }
}