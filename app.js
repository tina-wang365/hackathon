//var conString = "pg://

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('./sockets.js').listen(server),
    util = require('util');

/************** POSTGRES DATABASE STUFF **************/

// Require posgres
var pg = require('pg'); 
// Require the credentials for connetcting to postgres
var credentials = require('./database/credentials.js').data;

var conString = "pg://" + credentials.user + ":" + credentials.password + "@" + credentials.host + ":" + credentials.port + "/" + credentials.database;

util.log( conString );

/*****************************************************/

var port = process.env.PORT || 8080;
server.listen(port, function (){
    util.log('Server started on port ' + port);
});

app.use(express.static(__dirname + '/static'));
