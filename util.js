'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.methodToString = methodToString;

var _http = require('@angular/http');

function methodToString(method) {
    switch (method) {
        case _http.RequestMethod.Get:
            return 'GET';
        case _http.RequestMethod.Post:
            return 'POST';
        case _http.RequestMethod.Put:
            return 'PUT';
        case _http.RequestMethod.Delete:
            return 'DELETE';
        case _http.RequestMethod.Options:
            return 'OPTIONS';
        case _http.RequestMethod.Head:
            return 'HEAD';
        case _http.RequestMethod.Patch:
            return 'PATCH';
        default:
            return 'UNKNOWN';
    }
}
//# sourceMappingURL=util.js.map
