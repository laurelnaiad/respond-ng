import { Provider } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { Respond } from './respond';
import { HttpResponder } from './http-responder';
import { RequestMatcher } from './request-matcher';
declare const providers: (typeof BaseRequestOptions | typeof MockBackend | typeof HttpResponder | typeof Respond | Provider)[];
export { Respond, HttpResponder, RequestMatcher };
export default providers;
