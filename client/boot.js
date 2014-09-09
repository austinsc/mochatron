$(function () {
  var Client = require("./client.js");
  Client.connect();
  return Client.bindHandlers();
});
