import { Request, RequestMethod, Response } from '@angular/http';
export declare class RequestMatcher {
    private _response;
    private _used;
    private _assertions;
    constructor(_response: Response);
    matchesRequest(req: Request): boolean;
    method(method: RequestMethod): RequestMatcher;
    hasHeader(key: string, value?: string | string[]): RequestMatcher;
    body(body: any): RequestMatcher;
    url(url: string): RequestMatcher;
    get(url: string): RequestMatcher;
    post(url: string, body?: any): RequestMatcher;
    put(url: string, body?: any): RequestMatcher;
    delete(url: string): RequestMatcher;
    match(assertion: (res: Request) => boolean): RequestMatcher;
    response: Response;
    used: boolean;
}
