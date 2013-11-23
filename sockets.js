var socket = require('socket.io');

module.exports.listen = function(app){
    io = socket.listen(app);
    return io;
};
