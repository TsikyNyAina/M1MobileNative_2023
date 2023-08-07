"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init6 = exports.init5 = exports.init4 = exports.init3 = exports.init2 = exports.init1 = exports.init0 = void 0;
const EventController_1 = require("../controller/EventController");
const Event_1 = require("../entity/Event");
const MediaController_1 = require("../controller/MediaController");
const Media_1 = require("../entity/Media");
const UserController_1 = require("../controller/UserController");
const User_1 = require("../entity/User");
function init0() {
    let old0 = EventController_1.EventController.prototype.save;
    Object.defineProperty(EventController_1.EventController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof Event_1.Event || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to Event event  at EventController.save");
            else
                arg[1] = Object.assign(new Event_1.Event(), arg[1]);
            return old0.bind(this)(...arg);
        }
    });
}
exports.init0 = init0;
function init1() {
    let old1 = EventController_1.EventController.prototype.update;
    Object.defineProperty(EventController_1.EventController.prototype, "update", {
        value: function (...arg) {
            if (arg[2] instanceof Event_1.Event || !arg[2]) { }
            else if (typeof arg[2] != 'object')
                throw new Error(JSON.stringify(arg[2]) + "cannot be casted to Event event  at EventController.update");
            else
                arg[2] = Object.assign(new Event_1.Event(), arg[2]);
            return old1.bind(this)(...arg);
        }
    });
}
exports.init1 = init1;
function init2() {
    let old2 = MediaController_1.MediaController.prototype.save;
    Object.defineProperty(MediaController_1.MediaController.prototype, "save", {
        value: function (...arg) {
            if (arg[2] instanceof Media_1.Media || !arg[2]) { }
            else if (typeof arg[2] != 'object')
                throw new Error(JSON.stringify(arg[2]) + "cannot be casted to Media media  at MediaController.save");
            else
                arg[2] = Object.assign(new Media_1.Media(), arg[2]);
            return old2.bind(this)(...arg);
        }
    });
}
exports.init2 = init2;
function init3() {
    let old3 = MediaController_1.MediaController.prototype.update;
    Object.defineProperty(MediaController_1.MediaController.prototype, "update", {
        value: function (...arg) {
            if (arg[2] instanceof Media_1.Media || !arg[2]) { }
            else if (typeof arg[2] != 'object')
                throw new Error(JSON.stringify(arg[2]) + "cannot be casted to Media media  at MediaController.update");
            else
                arg[2] = Object.assign(new Media_1.Media(), arg[2]);
            return old3.bind(this)(...arg);
        }
    });
}
exports.init3 = init3;
function init4() {
    let old4 = UserController_1.UserController.prototype.save;
    Object.defineProperty(UserController_1.UserController.prototype, "save", {
        value: function (...arg) {
            if (arg[1] instanceof User_1.User || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to User user  at UserController.save");
            else
                arg[1] = Object.assign(new User_1.User(), arg[1]);
            return old4.bind(this)(...arg);
        }
    });
}
exports.init4 = init4;
function init5() {
    let old5 = UserController_1.UserController.prototype.login;
    Object.defineProperty(UserController_1.UserController.prototype, "login", {
        value: function (...arg) {
            if (arg[1] instanceof User_1.User || !arg[1]) { }
            else if (typeof arg[1] != 'object')
                throw new Error(JSON.stringify(arg[1]) + "cannot be casted to User user  at UserController.login");
            else
                arg[1] = Object.assign(new User_1.User(), arg[1]);
            return old5.bind(this)(...arg);
        }
    });
}
exports.init5 = init5;
function init6() {
    let old6 = UserController_1.UserController.prototype.update;
    Object.defineProperty(UserController_1.UserController.prototype, "update", {
        value: function (...arg) {
            if (arg[2] instanceof User_1.User || !arg[2]) { }
            else if (typeof arg[2] != 'object')
                throw new Error(JSON.stringify(arg[2]) + "cannot be casted to User user  at UserController.update");
            else
                arg[2] = Object.assign(new User_1.User(), arg[2]);
            return old6.bind(this)(...arg);
        }
    });
}
exports.init6 = init6;
