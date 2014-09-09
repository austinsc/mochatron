var assert = require("./lib/assert");
var Test = require("../client/models/test");

var testData = {
  title: "a sample test",
  fullTitle: "When running a sample test",
  duration: 100
};

describe("Test model", function () {
  var test = null;

  return describe("a newly instantiated object with a pass type", function () {
    before(function () {
      return (test = new Test(testData, "pass"));
    });

    return it("return true from isPass", function () {
      return assert.ok(test.isPass());
    });
  });
});
