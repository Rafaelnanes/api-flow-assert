import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../model';

@Injectable({
    providedIn: 'root',
})
export class HttpRequestService {

    constructor(private httpClient: HttpClient) {

    }

    public getSimple() {
        this.httpClient.get('http://localhost:8080/product')
            .subscribe(response => console.log(response));
    }

    public createRequest(request: Request) {
        let headers = this.parseHeaders(request);
        let body = request.body ? request.body : {};
        if (request.method === 'GET') {

            this.httpClient.get(request.url, headers)
                .subscribe(response => console.log(response));

        } else if (request.method === 'POST') {

            this.httpClient.post(request.url, body, headers)
                .subscribe(response => console.log(response));

        } else if (request.method === 'PUT') {

        } else {

        }
    }

    private parseHeaders(request: Request): any {
        let headers = new HttpHeaders();
        for (let header of request.headers) {
            headers = headers.set(header.key, header.value);
        }
        return { headers: headers };
    }

}