var Suite = require("../suite.js");

var suites = [];
var SuiteMapper = {
  createSuite: function (data) {
    var instance, suite;
    instance = suites.length + 1;
    suite = new Suite(data, instance);
    suites.push(suite);
    return suite;
  },
  findAll: function () {
    return suites;
  },
  findActive: function (identifier) {
    var suite, _i, _len;
    for (_i = 0, _len = suites.length; _i < _len; _i++) {
      suite = suites[_i];
      if (suite.isActiveForIdentifier(identifier)) {
        return suite;
      }
    }
  }
};

module.exports = SuiteMapper;
