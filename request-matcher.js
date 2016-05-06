'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestMatcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _http = require('@angular/http');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestMatcher = function () {
    function RequestMatcher(_response) {
        _classCallCheck(this, RequestMatcher);

        this._response = _response;
        this._used = false;
        this._assertions = [];
    }

    _createClass(RequestMatcher, [{
        key: 'matchesRequest',
        value: function matchesRequest(req) {
            return this._assertions.reduce(function (prev, assertion) {
                return prev && assertion(req);
            }, true);
        }
    }, {
        key: 'method',
        value: function method(_method) {
            this._assertions.push(function (req) {
                return req.method === _method;
            });
            return this;
        }
    }, {
        key: 'hasHeader',
        value: function hasHeader(key, value) {
            this._assertions.push(function (req) {
                var headers = req.headers;
                if (!value) {
                    return headers.has(key);
                }
                var _value = Array.isArray(value) ? value.join(',') : value;
                return headers.has(key) && _value === headers.get(key);
            });
            return this;
        }
    }, {
        key: 'body',
        value: function body(_body) {
            this._assertions.push(function (req) {
                var _value = typeof _body === 'string' ? _body : JSON.stringify(_body);
                return req.text() === _value;
            });
            return this;
        }
    }, {
        key: 'url',
        value: function url(_url) {
            this._assertions.push(function (req) {
                return req.url === _url;
            });
            return this;
        }
    }, {
        key: 'get',
        value: function get(url) {
            this.url(url);
            return this.method(_http.RequestMethod.Get);
        }
    }, {
        key: 'post',
        value: function post(url, body) {
            if (body) {
                this.body(body);
            }
            this.url(url);
            return this.method(_http.RequestMethod.Post);
        }
    }, {
        key: 'put',
        value: function put(url, body) {
            if (body) {
                this.body(body);
            }
            this.url(url);
            return this.method(_http.RequestMethod.Put);
        }
    }, {
        key: 'delete',
        value: function _delete(url) {
            this.url(url);
            return this.method(_http.RequestMethod.Delete);
        }
    }, {
        key: 'match',
        value: function match(assertion) {
            this._assertions.push(assertion);
            return this;
        }
    }, {
        key: 'response',
        get: function get() {
            this._used = true;
            return this._response;
        }
    }, {
        key: 'used',
        get: function get() {
            return this._used;
        }
    }]);

    return RequestMatcher;
}();

exports.RequestMatcher = RequestMatcher;
//# sourceMappingURL=request-matcher.js.map
