var assert = require("./lib/assert");
var Suite = require("../client/models/suite");

var testData = {
  namespace: "my_namespace",
  title: "My Title"
};

describe("Suite model", function () {
  var suite = null;

  describe("a newly instantiated object", function () {
    before(function () {
      return (suite = new Suite(testData, 1));
    });

    it("should return the correct DOM string", function () {
      return assert.equal("[data-namespace='my_namespace'][data-title='My Title'][data-instance='1']", suite.getDomString());
    });

    it("should return the correct title", function () {
      return assert.equal("My Title", suite.getTitle());
    });

    it("should return the correct full title", function () {
      return assert.equal("my_namespace - My Title", suite.getFullTitle());
    });

    it("should return the correct identifier", function () {
      return assert.equal("my_namespace_My Title_1", suite.getIdentifier());
    });

    it("should not be active", function () {
      return assert.equal(false, suite.isActive());
    });

    it("should not have any tests", function () {
      return assert.equal(0, suite.getTestCount());
    });

    it("should have a total test count of zero", function () {
      return assert.equal(0, suite.getTotalTestCount());
    });

    return it("should be be zero percent complete", function () {
      return assert.equal(0, suite.getPercentComplete());
    });
  });

  describe("isActiveForIdentifier", function () {
    before(function () {
      return (suite = new Suite(testData, 1));
    });

    it("should return false when inactive", function () {
      return assert.equal(false, suite.isActiveForIdentifier({
        namespace: "my_namespace",
        title: "My Title"
      }));
    });

    it("should return false when identifier does not match", function () {
      suite.active = true;
      return assert.equal(false, suite.isActiveForIdentifier({
        namespace: "other_namespace",
        title: "My Title"
      }));
    });

    return it("should return true when active and identifier matches", function () {
      suite.active = true;
      return assert.equal(true, suite.isActiveForIdentifier({
        namespace: "my_namespace",
        title: "My Title"
      }));
    });
  });

  describe("addTest", function () {
    before(function () {
      suite = new Suite(testData, 1);
      return suite.addTest({
        title: "foo",
        fullTitle: "bar",
        duration: 1
      });
    });

    return it("should increment the test count", function () {
      return assert.equal(1, suite.getTestCount());
    });
  });

  describe("activate", function () {
    before(function () {
      suite = new Suite(testData, 1);
      return suite.activate();
    });

    return it("should make the suite active", function () {
      return assert.equal(true, suite.isActive());
    });
  });

  return describe("deactivate", function () {
    before(function () {
      suite = new Suite(testData, 1);
      suite.active = true;
      return suite.deactivate();
    });

    return it("should make the suite inactive", function () {
      return assert.equal(false, suite.isActive());
    });
  });
});
