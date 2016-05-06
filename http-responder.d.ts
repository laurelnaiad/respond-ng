import { MockBackend, MockConnection } from '@angular/http/testing';
import { RequestMatcher } from './request-matcher';
export declare class HttpResponder {
    private _matchers;
    constructor(backend: MockBackend);
    test(connection: MockConnection): void;
    addMatcher(matcher: RequestMatcher): void;
    verifyNoUnusedMatchers(): void;
}
