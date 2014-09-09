var PageController = require("../controllers/page");

var UrlRouter = {
  load: function (app) {
    PageController.init(app);
    return app.get("/", function (req, res) {
      return PageController.index(req, res);
    });
  }
};

module.exports = UrlRouter;
