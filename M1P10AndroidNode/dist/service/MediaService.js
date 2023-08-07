"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const entity_1 = require("../entity");
const database_1 = require("../database");
class MediaService {
    constructor() {
        this.repository = database_1.datasource.getRepository(entity_1.Media);
    }
    create(media) {
        return this.repository.save(media);
    }
    findAll(option) {
        return this.repository.find(option);
    }
    findOne(id) {
        return this.repository.findOneOrFail({ where: { id } });
    }
    update(id, media) {
        return this.repository.upsert(Object.assign(Object.assign({}, media), { id }), ['id']);
    }
    remove(id) {
        return this.repository.delete({ id });
    }
}
exports.MediaService = MediaService;
