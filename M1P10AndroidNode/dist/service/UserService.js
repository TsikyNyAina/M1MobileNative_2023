"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const entity_1 = require("../entity");
const database_1 = require("../database");
class UserService {
    constructor() {
        this.repository = database_1.datasource.getRepository(entity_1.User);
    }
    create(user) {
        return this.repository.save(user);
    }
    findAll(option) {
        return this.repository.find(option);
    }
    findOne(id) {
        return this.repository.findOneOrFail({ where: { id } });
    }
    update(id, user) {
        return this.repository.upsert(Object.assign(Object.assign({}, user), { id }), ['id']);
    }
    remove(id) {
        return this.repository.delete({ id });
    }
    login(username, password) {
        return this.repository.findOneByOrFail({
            username, password
        });
    }
}
exports.UserService = UserService;
