"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotif = exports.initSocket = exports.io = void 0;
const socket_io_1 = require("socket.io");
function initSocket(server, app) {
    exports.io = new socket_io_1.Server(server);
    exports.io.on('connection', (socket) => {
        console.log('A user connected');
        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });
}
exports.initSocket = initSocket;
function sendNotif(notification) {
    return exports.io.emit(notification.channel || 'default', JSON.stringify(notification));
}
exports.sendNotif = sendNotif;
