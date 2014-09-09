  module.exports = function (params) {
    var suite = params.suite;
    var _wrapper = $("[data-wrapper]");
    var domSuite = _wrapper.find(suite.getDomString());
    domSuite.find(".progress").removeClass("active");

    var active = $("div[data-active-suites]");
    active.find("[data-placeholder]").remove();

    var a = active.find("[data-identifier='" + (suite.getIdentifier()) + "']").remove();
    if (active.find("a").length === 1) {
      active.append("<a class=\"list-group-item\" data-placeholder>None</a>");
    }
    var recent = $("div[data-recent-suites]");
    recent.find("[data-placeholder]").remove();
    var badge = a.find(".badge").removeClass("badge-info");
    if (suite.success()) {
      a.addClass('list-group-item-success');
      badge.addClass("badge-success").html("ok");
      domSuite.find(".progress-bar").addClass("progress-bar-success").removeClass('active');
    } else {
      a.addClass('list-group-item-danger');
      badge.addClass("badge-important").html("fail");
      domSuite.find(".progress-bar").addClass("progress-bar-danger").removeClass('active');
    }
    return recent.append(a);
  };
