(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  };

  var kjj = new Person("kjj");
  console.log(kjj);

}));
