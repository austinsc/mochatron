module.exports = function (params) {
  var suite = params.suite;
  var test = params.test;

  var _wrapper = $("[data-wrapper]");
  var domSuite = _wrapper.find(suite.getDomString());
  domSuite.find("[data-current]").html(suite.getTestCount());

  var symbol = test.isPass() ? "✔" : "✘";
  var li = $("<li class=list-group-item><span class='" + test.type + "'>" + symbol + "</span> " + test.fullTitle + "<span class='badge badge-success'>" + test.duration + " ms</span></li>");
  var ul = domSuite.find("ul.tests");
  ul.append(li);

  domSuite.find(".test-wrapper")
    .scrollTop(ul.height());
  var pc = Math.round(suite.getPercentComplete());
  domSuite.find(".progress-bar")
    .attr("aria-valuenow", pc)
    .css("width", "" + pc + "%")
    .text("" + pc + "%");

  $("a[data-identifier='" + (suite.getIdentifier()) + "']").addClass("list-group-item");
  return $("a[data-identifier='" + (suite.getIdentifier()) + "'] .badge").html("" + pc + "%");
};
