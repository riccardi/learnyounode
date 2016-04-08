var fs = require('fs');
var content;

var processFile = function(content) {
	var lines = content.toString().split("\n").length-1;
	console.log(lines);
}

fs.readFile(process.argv[2], function callback(err,data) {
	if (err) {
		throw err;
	}
	processFile(data);
});