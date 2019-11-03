import { KeyPair } from '..';

export class Request {
    constructor(public id: string, public method: string, public url: string, public body: any, public headers: KeyPair[]) { }
}