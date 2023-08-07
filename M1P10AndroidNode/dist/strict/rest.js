"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init2 = exports.init1 = exports.init0 = void 0;
const express_1 = require("express");
const EventController_1 = require("../controller/EventController");
const MediaController_1 = require("../controller/MediaController");
const UserController_1 = require("../controller/UserController");
function init0() {
    Object.defineProperty(EventController_1.EventController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/id/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/event", router);
        },
        configurable: true
    });
}
exports.init0 = init0;
function init1() {
    Object.defineProperty(MediaController_1.MediaController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/id/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(req);
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/media", router);
        },
        configurable: true
    });
}
exports.init1 = init1;
function init2() {
    Object.defineProperty(UserController_1.UserController.prototype, "rest", {
        value: function (app) {
            const router = (0, express_1.Router)();
            router.get("/:option", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.option);
                try {
                    yield this.getAll(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.get("/id/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.getById(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.save(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.post("/login", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.body);
                try {
                    yield this.login(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.put("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                arg.push(req.body);
                try {
                    yield this.update(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            router.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
                const arg = new Array();
                arg.push(res);
                arg.push(req.params.id);
                try {
                    yield this.delete(...arg);
                }
                catch (error) {
                    res.status(500).send((error === null || error === void 0 ? void 0 : error.message) || error);
                }
            }));
            app.use("/user", router);
        },
        configurable: true
    });
}
exports.init2 = init2;
