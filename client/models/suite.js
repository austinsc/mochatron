/*
 * A suite is a group of tests which can be uniquely identified by a combination
 * of three properties: namespace+title+instance
 * e.g.
 * namespace = my_linux_computer
 * title = My PRoject
 * instance = 1, 2, 3...
 */
var Test = require("./test.js");

var Suite = (function () {
  function Suite(data, instance) {
    this.namespace = data.namespace;
    this.title = data.title;
    this.instance = instance;
    this.active = false;
    this.tests = [];
    this.totalTests = 0;
  }

  Suite.prototype.getTitle = function () {
    return this.title;
  };

  Suite.prototype.getFullTitle = function () {
    return "" + this.namespace + " - " + this.title;
  };

  Suite.prototype.getIdentifier = function () {
    return "" + this.namespace + "_" + this.title + "_" + this.instance;
  };

  Suite.prototype.getDomString = function () {
    return "[data-namespace='" + this.namespace + "'][data-title='" + this.title + "'][data-instance='" + this.instance + "']";
  };

  Suite.prototype.isActive = function () {
    return this.active;
  };

  Suite.prototype.isActiveForIdentifier = function (identifier) {
    return this.active && this.namespace === identifier.namespace && this.title === identifier.title;
  };

  Suite.prototype.addTest = function (data, type) {
    var test;
    test = new Test(data, type);
    this.tests.push(test);
    return test;
  };

  Suite.prototype.getTestCount = function () {
    return this.tests.length;
  };

  Suite.prototype.getTotalTestCount = function () {
    return this.totalTests;
  };

  Suite.prototype.getPercentComplete = function () {
    if (!this.getTotalTestCount()) {
      return 0;
    }
    return (this.getTestCount() / this.getTotalTestCount()) * 100;
  };

  Suite.prototype.activate = function () {
    return (this.active = true);
  };

  Suite.prototype.deactivate = function () {
    return (this.active = false);
  };

  Suite.prototype.success = function () {
    var _ref = this.tests;
    for (var _i = 0, _len = _ref.length; _i < _len; _i++) {
      if (!_ref[_i].isPass()) {
        return false;
      }
    }
    return true;
  };

  return Suite;

})();

module.exports = Suite;
