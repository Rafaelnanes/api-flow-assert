import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Request, Response } from '../model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
        let response: Observable<HttpResponse<any>>;
        if (request.method === 'GET') {

            response = this.httpClient.get(request.url, { headers: headers, observe: 'response' });

        } else if (request.method === 'POST') {

            response = this.httpClient.post(request.url, body, { headers: headers, observe: 'response' });

        } else if (request.method === 'PUT') {

        } else {

        }

        return response.pipe(
            map(response => {
                return new Response(response.ok, response.status, JSON.stringify(response.body, null, 2));
            }),
            catchError(response => {
                return of(new Response(response.ok, response.status, JSON.stringify(response.error, null, 2)));
            })
        );
    }

    private parseHeaders(request: Request): any {
        let headers = new HttpHeaders();
        for (let header of request.headers) {
            headers = headers.set(header.key, header.value);
        }
        return headers;
    }

}