var viewMap = {
  "suite:create": require("./views/create-suite.js"),
  "suite:start": require("./views/start-suite.js"),
  "suite:end": require("./views/end-suite.js"),
  "suite:add_test": require("./views/add-test.js")
};

var View = {
  render: function (view, data) {
    return viewMap[view](data);
  }
};

module.exports = View;
