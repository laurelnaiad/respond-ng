"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Respond = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _http = require("@angular/http");

var _requestMatcher = require("./request-matcher");

var _httpResponder = require("./http-responder");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Respond = exports.Respond = function () {
    function Respond(_responder) {
        _classCallCheck(this, Respond);

        this._responder = _responder;
        this._reset();
    }

    _createClass(Respond, [{
        key: "_reset",
        value: function _reset() {
            this._body = '';
            this._headers = new _http.Headers();
            this._status = 200;
            this._url = undefined;
        }
    }, {
        key: "serialize",
        value: function serialize() {
            var options = new _http.ResponseOptions({
                body: this._body,
                status: this._status,
                headers: this._headers,
                url: this._url
            });
            this._reset();
            return new _http.Response(options);
        }
    }, {
        key: "withHeader",
        value: function withHeader(name, value) {
            this._headers.set(name, value);
            return this;
        }
    }, {
        key: "withBody",
        value: function withBody(body) {
            this._body = typeof body === 'string' ? body : JSON.stringify(body);
            return this;
        }
    }, {
        key: "withStatus",
        value: function withStatus(status) {
            this._status = status;
            return this;
        }
    }, {
        key: "withUrl",
        value: function withUrl(url) {
            this._url = url;
            return this;
        }
    }, {
        key: "with",
        value: function _with(status) {
            var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var headers = arguments[2];

            this._headers = headers || this._headers;
            this.withStatus(status);
            this.withBody(body);
            return this;
        }
    }, {
        key: "ok",
        value: function ok(body, headers) {
            return this.with(200, body, headers);
        }
    }, {
        key: "error",
        value: function error(body, headers) {
            return this.with(500, body, headers);
        }
    }, {
        key: "verifyComplete",
        value: function verifyComplete() {
            this._responder.verifyNoUnusedMatchers();
        }
    }, {
        key: "when",
        get: function get() {
            var matcher = new _requestMatcher.RequestMatcher(this.serialize());
            this._responder.addMatcher(matcher);
            return matcher;
        }
    }]);

    return Respond;
}();
exports.Respond = Respond = __decorate([(0, _core.Injectable)(), __metadata('design:paramtypes', [_httpResponder.HttpResponder])], Respond);
//# sourceMappingURL=respond.js.map
