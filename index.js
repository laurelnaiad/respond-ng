'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestMatcher = exports.HttpResponder = exports.Respond = undefined;

var _core = require('@angular/core');

var _testing = require('@angular/http/testing');

var _http = require('@angular/http');

var _respond = require('./respond');

var _httpResponder = require('./http-responder');

var _requestMatcher = require('./request-matcher');

var providers = [_http.BaseRequestOptions, _testing.MockBackend, _httpResponder.HttpResponder, _respond.Respond, (0, _core.provide)(_http.Http, {
    deps: [_testing.MockBackend, _http.BaseRequestOptions],
    useFactory: function useFactory(backend, options) {
        return new _http.Http(backend, options);
    }
})];
exports.Respond = _respond.Respond;
exports.HttpResponder = _httpResponder.HttpResponder;
exports.RequestMatcher = _requestMatcher.RequestMatcher;
exports.default = providers;
//# sourceMappingURL=index.js.map
