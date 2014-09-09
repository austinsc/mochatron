var assert = require("./lib/assert");
var SuiteMapper = require("../client/models/mappers/suite");

var testData = {
  namespace: "my_namespace",
  title: "My Title"
};

describe("Suite mapper", function () {
  var suite = null;
  describe("createSuite", function () {
    before(function () {
      return (suite = SuiteMapper.createSuite(testData));
    });

    it("should return a suite with the correct instance", function () {
      return assert.equal(1, suite.instance);
    });

    it("should return a suite with the correct DOM string", function () {
      return assert.equal("[data-namespace='my_namespace'][data-title='My Title'][data-instance='1']", suite.getDomString());
    });

    return it("should return a suite with the correct title", function () {
      return assert.equal("My Title", suite.getTitle());
    });
  });

  describe("findAll", function () {
    return it("should return the correct number of suites", function () {
      return assert.equal(1, SuiteMapper.findAll().length);
    });
  });

  return describe("findActive", function () {
    return it("should return null for no active match", function () {
      return assert.equal(null, SuiteMapper.findActive(testData));
    });
  });
});
