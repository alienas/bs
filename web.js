var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var outfile = 'index.html';
var data = new Buffer(50);

data= fs.readFileSync(outfile);
//len = data.write('\u00bd + \u00bc = \u00be', 0);
//len= data.length();

console.log (data.toString('utf8'));

app.get('/', function(request, response) {
  response.send(data.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
