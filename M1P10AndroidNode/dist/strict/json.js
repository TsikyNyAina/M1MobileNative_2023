"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init0 = void 0;
const User_1 = require("../entity/User");
const index_1 = require("../type/index");
// this sourceFile was generated by processor-unit 
let map = new Map();
function init0() {
    var _a;
    map.set(User_1.User.prototype, new Array());
    Object.defineProperty(User_1.User.prototype, "toJSON", {
        configurable: true,
        value: function () {
            const old = {};
            for (let k of Object.keys(this))
                old[k] = this[k];
            for (let k of map.get(User_1.User.prototype) || [])
                old[k[1]] = k[2].bind(this)(this[k[0]]);
            return old;
        }
    });
    (_a = map.get(User_1.User.prototype)) === null || _a === void 0 ? void 0 : _a.push(["password", "password", index_1.ignore]);
}
exports.init0 = init0;
