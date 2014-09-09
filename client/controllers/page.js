/*
 * PageController is a bit of a bad name for this, so it'll probably get renamed
 * at some point. SuiteController perhaps?
 */

var SuiteMapper = require("../models/mappers/suite.js");
var View = require("../view.js");
var _wrapper = $("[data-wrapper]");
var suites = [];

var PageController = {
  addTest: function (type, data) {
    var params, suite, test;
    suite = SuiteMapper.findActive(data.identifier);
    if (!suite) {
      return;
    }
    test = suite.addTest(data, type);
    params = {
      suite: suite,
      test: test
    };
    return View.render("suite:add_test", params);
  },

  createSuite: function (data) {
    var params, suite;
    suite = SuiteMapper.createSuite(data);
    suite.activate();
    params = data;
    params.suite = suite;
    return View.render("suite:create", params);
  },

  startSuite: function (data) {
    var params, suite;
    suite = SuiteMapper.findActive(data.identifier);
    if (!suite) {
      return;
    }
    suite.totalTests = data.total;
    params = data;
    params.suite = suite;
    return View.render("suite:start", params);
  },

  endSuite: function (data) {
    var params, suite;
    suite = SuiteMapper.findActive(data.identifier);
    if (!suite) {
      return;
    }
    suite.deactivate();
    params = data;
    params.suite = suite;
    return View.render("suite:end", params);
  }
};

module.exports = PageController;
