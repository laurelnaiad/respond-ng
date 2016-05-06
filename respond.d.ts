import { Response, Headers } from '@angular/http';
import { RequestMatcher } from './request-matcher';
import { HttpResponder } from './http-responder';
export declare class Respond {
    private _responder;
    private _body;
    private _headers;
    private _status;
    private _url;
    constructor(_responder: HttpResponder);
    private _reset();
    serialize(): Response;
    withHeader(name: string, value: string | string[]): Respond;
    withBody(body: any): Respond;
    withStatus(status: number): Respond;
    withUrl(url: string): Respond;
    with(status: number, body?: any, headers?: Headers): Respond;
    ok(body?: any, headers?: Headers): Respond;
    error(body?: any, headers?: Headers): Respond;
    when: RequestMatcher;
    verifyComplete(): void;
}
