'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

Object.defineProperty(exports, 'MyComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

var _indexCopy = require('./indexCopy');

Object.defineProperty(exports, 'MyComponentCopy', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_indexCopy).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }