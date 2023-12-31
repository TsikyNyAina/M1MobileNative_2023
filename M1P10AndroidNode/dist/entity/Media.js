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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
const typeorm_1 = require("typeorm");
const Event_1 = require("./Event");
const decorator_1 = require("../decorator");
let Media = class Media {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Media.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Media.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Media.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'simple-json',
    }),
    __metadata("design:type", Object)
], Media.prototype, "fileInfo", void 0);
__decorate([
    decorator_1.swaggerIgnore,
    (0, typeorm_1.ManyToOne)(() => Event_1.Event, (event) => event.media),
    (0, typeorm_1.JoinColumn)({ name: 'eventId' }),
    __metadata("design:type", Event_1.Event)
], Media.prototype, "event", void 0);
Media = __decorate([
    (0, typeorm_1.Entity)({ name: 'media' })
], Media);
exports.Media = Media;
