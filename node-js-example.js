var http = require('http');
var calculator = require('./modules/calculator');




http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('penambahan' + calculator.add(10, 5));
  res.write('perkalian' + calculator.multiply(10, 5));

  res.end();
}).listen(20000);