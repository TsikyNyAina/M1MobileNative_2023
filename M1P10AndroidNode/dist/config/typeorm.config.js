"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const database_config_1 = require("./database.config");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    ...(0, database_config_1.getDatabaseConfig)(configService),
    type: 'mysql',
});
//# sourceMappingURL=typeorm.config.js.map