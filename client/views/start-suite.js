module.exports = function (params) {
  var suite = params.suite;
  var _wrapper = $("[data-wrapper]");
  var domSuite = _wrapper.find(params.suite.getDomString());
  domSuite.find("[data-total]")
    .html(params.suite.getTotalTestCount());
  var active = $("div[data-active-suites]");
  active.find("[data-placeholder]").remove();
  var li = $("<a class=\"list-group-item suite-label\" href=#>" + (suite.getFullTitle()) + " <span class='badge badge-info'>0%</span></a>")
    .attr("data-identifier", params.suite.getIdentifier());
  return active.append(li);
};
