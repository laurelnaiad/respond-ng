"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HttpResponder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _core = require("@angular/core");

var _testing = require("@angular/http/testing");

var _util = require("./util");

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
var HttpResponder = exports.HttpResponder = function () {
    function HttpResponder(backend) {
        var _this = this;

        _classCallCheck(this, HttpResponder);

        this._matchers = [];
        backend.connections.subscribe(function (connection) {
            _this.test(connection);
        });
    }

    _createClass(HttpResponder, [{
        key: "test",
        value: function test(connection) {
            var req = connection.request;
            var match = this._matchers.filter(function (matcher) {
                return !matcher.used;
            }).find(function (matcher) {
                return matcher.matchesRequest(req);
            });
            if (!match) {
                throw new Error("Unexpected request: " + (0, _util.methodToString)(req.method) + " " + req.url);
            }
            var res = match.response;
            if (res.status < 200 || res.status > 299) {
                connection.mockError(res);
            } else {
                connection.mockRespond(res);
            }
        }
    }, {
        key: "addMatcher",
        value: function addMatcher(matcher) {
            this._matchers.push(matcher);
        }
    }, {
        key: "verifyNoUnusedMatchers",
        value: function verifyNoUnusedMatchers() {
            var unused = this._matchers.filter(function (matcher) {
                return !matcher.used;
            });
            if (unused.length > 0) {
                throw new Error("Unmet expectations found!");
            }
        }
    }]);

    return HttpResponder;
}();
exports.HttpResponder = HttpResponder = __decorate([(0, _core.Injectable)(), __metadata('design:paramtypes', [_testing.MockBackend])], HttpResponder);
//# sourceMappingURL=http-responder.js.map
