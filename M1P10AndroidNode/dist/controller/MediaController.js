"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.MediaController = void 0;
const decorator_1 = require("../decorator");
const service_1 = require("../service");
const entity_1 = require("../entity");
let MediaController = class MediaController {
    constructor() {
        this.mediaService = new service_1.MediaService;
    }
    getAll(res, option) {
        return __awaiter(this, void 0, void 0, function* () {
            // async getAll(res: Response, option:Option){
            option = option ? JSON.parse(option + "") : {};
            res.send(yield this.mediaService.findAll(option));
        });
    }
    getById(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            // async getById(res: Response, id:number){ 
            res.send(yield this.mediaService.findOne(+id));
        });
    }
    save(req, res, media) {
        return __awaiter(this, void 0, void 0, function* () {
            // async save(req:Request,res: Response, media:Media){ 
            media.fileInfo = Object.assign({}, req.file);
            res.send(yield this.mediaService.create(media));
        });
    }
    update(res, id, media) {
        return __awaiter(this, void 0, void 0, function* () {
            // async update(res: Response,  id:number,  media:Media){ 
            res.send(yield this.mediaService.update(id, media));
        });
    }
    delete(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            // async delete(res: Response,  id:number){ 
            res.send(yield this.mediaService.remove(id));
        });
    }
};
__decorate([
    (0, decorator_1.Get)("/:option"),
    __param(1, (0, decorator_1.RequestParam)("option")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "getAll", null);
__decorate([
    (0, decorator_1.Get)("/id/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "getById", null);
__decorate([
    (0, decorator_1.Post)("/"),
    __param(2, decorator_1.RequestBody),
    __param(2, decorator_1.cast),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, entity_1.Media]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "save", null);
__decorate([
    (0, decorator_1.Put)("/"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __param(2, decorator_1.RequestBody),
    __param(2, decorator_1.cast),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, entity_1.Media]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "update", null);
__decorate([
    (0, decorator_1.Delete)("/:id"),
    __param(1, (0, decorator_1.RequestParam)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "delete", null);
MediaController = __decorate([
    (0, decorator_1.RestController)("/media")
], MediaController);
exports.MediaController = MediaController;
