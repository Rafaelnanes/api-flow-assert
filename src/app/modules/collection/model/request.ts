import { KeyPair } from '../../shared';

export class Request {
    constructor(public id: string, public method: string, public url: string, public body: any, public header: KeyPair[]) { }
}