var zmq = require("zmq");
var push = zmq.socket("push");
var colors = require("colors");

process.stdin.resume();
process.stdin.setEncoding("utf8");

var title = process.argv[2] || 'Unidentified Project';
var namespace = require("os").hostname();

var identifier = {
  title: title,
  namespace: namespace
};

var msg = [
  ["identifier", identifier]
];

push.connect("tcp://127.0.0.1:3456");
push.send(JSON.stringify(msg));

process.stdin.on("data", function (chunk) {
  process.stdout.write(chunk);
  var lines = chunk.split("\n");
  var final = [];
  for (var _i = 0, _len = lines.length; _i < _len; _i++) {
    var line = lines[_i];
    if (line !== '') {
      _line = JSON.parse(line);
      _line[1].identifier = identifier;
      final.push(_line);
    }
  }
  if (final.length) {
    return push.send(JSON.stringify(final));
  }
});

process.stdin.on("end", function () {
  return process.exit();
});
