(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _page = require('./modules/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  window.Universal = window.Universal || {};
  window.Universal.site = window.Universal.site || {};

  window.Universal.site.mobile = window.matchMedia('( max-width: 720px)').matches;

  window.Universal.site.ie9 = $('.lte-ie9')[0];

  var Page = new _page2.default({
    class: '.page'
  });
});

},{"./modules/page":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
=======
  Events specific to the page

=======
*/

var _default = function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.pageFunction = function () {
      console.log('working');
    };

    this.options = options;
    this.elements = {};
    this.init();
  }

  _createClass(_default, [{
    key: 'init',
    value: function init() {
      this.pageFunction();
    }
  }]);

  return _default;
}();

exports.default = _default;

},{}]},{},[1]);
