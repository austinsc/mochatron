/*
{
    "title":"should show as in stock",
    "fullTitle":"Product tests When viewing a product page should show as in stock",
    "duration":5,
    "namespace":{
        "title":"Test Project",
        "identifier":"nick-desktop_linux_3.0.0-20-generic-pae"
    }
}
 */
var Test = (function () {
  function Test(data, type) {
    this.title = data.title;
    this.fullTitle = data.fullTitle;
    this.duration = data.duration;
    this.type = type;
  }

  Test.prototype.isPass = function () {
    return this.type === "pass";
  };

  return Test;
})();

module.exports = Test;
