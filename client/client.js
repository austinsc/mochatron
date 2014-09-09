var PageController = require("./controllers/page.js");
var _socket = null;
var _connected = false;

var Client = {
  connect: function () {
    if (typeof io === "undefined" || io === null) {
      return false;
    }

    _socket = io.connect();
    _socket.on("connect", function () {
      return (_connected = true);
    });

    return _socket.on("message", function (packet) {
      try {
        var messages = JSON.parse(packet);
        var _results = [];
        for (var _i = 0, _len = messages.length; _i < _len; _i++) {
          var message = messages[_i];
          var method = message[0];
          var data = message[1];
          switch (method) {
          case "identifier":
            _results.push(PageController.createSuite(data));
            break;
          case "start":
            _results.push(PageController.startSuite(data));
            break;
          case "pass":
            _results.push(PageController.addTest("pass", data));
            break;
          case "fail":
            _results.push(PageController.addTest("fail", data));
            break;
          case "end":
            _results.push(PageController.endSuite(data));
            break;
          default:
            _results.push(console.log("ignoring method " + method));
          }
        }
        return _results;
      } catch (_error) {
        var e = _error;
        return console.error(e);
      }
    });
  },

  bindHandlers: function () {
    return $(document).on("click", ".suite-label", function (e) {
      e.preventDefault();
      $(".suite").hide();
      var identifier = $(this).attr("data-identifier");
      return $(".suite[data-identifier='" + identifier + "']").show();
    });
  }
};

module.exports = Client;
