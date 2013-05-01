var arDrone = require('ar-drone');
var client = arDrone.createClient();

var full = process.argv.length != 2;

client.config('general:navdata_demo', full);
client.on('navdata', console.log);
