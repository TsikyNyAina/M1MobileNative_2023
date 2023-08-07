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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UserService_query;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const entities_1 = require("./entities");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alias = 'user';
let UserService = exports.UserService = class UserService {
    get query() {
        return __classPrivateFieldGet(this, _UserService_query, "f").clone();
    }
    constructor(repository) {
        this.repository = repository;
        _UserService_query.set(this, void 0);
        __classPrivateFieldSet(this, _UserService_query, this.repository.createQueryBuilder(alias), "f");
    }
    create(createUserDto) {
        const user = Object.assign(new entities_1.User(), createUserDto);
        return this.repository.save(user);
    }
    findAll(option) {
        return this.repository.find(option);
    }
    findOne(id) {
        return this.repository.findOneOrFail({ where: { id } });
    }
    findOneBy(usernom, mdp) {
        console.log(usernom);
        return this.repository.findOneOrFail({
            where: {
                username: usernom,
                password: mdp,
            },
        });
    }
    update(id, updateUserDto) {
        const user = Object.assign(new entities_1.User(), updateUserDto, { id });
        return this.repository.upsert(user, ['id']);
    }
    remove(id) {
        return this.repository.delete({ id });
    }
};
_UserService_query = new WeakMap();
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map