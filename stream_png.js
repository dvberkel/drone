var http = require('http');
var arDrone = require('ar-drone');

var client = arDrone.createClient();
var png = null;

var server = http.createServer(function(req, res){
    var sendPng = function sendPng(buffer){
	console.log(buffer.length);
	res.write('--daboundary\n');
	res.write('Content-Type: image/png\n');
	res.write('Content-length: ' + buffer.length);
	res.write('\n\n');
	res.write(buffer);
    }

    if (!png) {
	png = client.createPngStream({ log : process.stderr });
	png.on('error', function(error){
	    console.log('error occurred with png stream: ' + error);
	});
    }

    res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--daboundary' });

    png.on('data', sendPng);
});
server.listen(3435);
