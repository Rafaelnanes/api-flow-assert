import { Request } from './request';
import { Response } from './response';
export class Message {
    constructor(public request: Request, public response?: Response) { }
}