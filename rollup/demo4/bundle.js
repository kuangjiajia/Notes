'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var index = 42;

function main () {
  _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
  console.log('the answer is ' + index);
}

module.exports = main;
