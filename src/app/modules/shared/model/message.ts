import { Request } from './request';
import { Response } from './response';
import { Assert } from './assert';

export class Message {
    constructor(public request: Request, public response?: Response, public assert?: Assert) { }
}