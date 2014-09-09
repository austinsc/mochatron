module.exports = function (params) {
  var suite = params.suite;
  var _wrapper = $("[data-wrapper]");
  var identifier = _wrapper.find(suite.getDomString());
  if (!identifier.length) {
    identifier = $("<div></div>")
      .attr("data-namespace", suite.namespace)
      .attr("data-title", suite.title)
      .attr("data-instance", suite.instance)
      .attr("data-identifier", suite.getIdentifier())
      .addClass("suite").hide();
    _wrapper.append(identifier);
  }

  var h2 = $("<h2></h2>")
    .html(params.title)
    .append("<span class=small> (<span data-current>0</span> / <span data-total>?</span>)</span>");
  var progress = $('<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>');
  var tests = $("<ul class=list-group></ul>")
    .attr("data-tests", "")
    .addClass("tests");
  var div = $("<div class=test-wrapper></div>")
    .append(tests);
  return identifier
    .append(h2)
    .append(progress)
    .append(div);
};
