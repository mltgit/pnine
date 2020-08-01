var http = require('http');

//create a server object:
http.createSerer(function (req, res) {
  res.write('Hello, Local World!'); //write a response to the client
  res/end(); //end the response
}).listen(9000);