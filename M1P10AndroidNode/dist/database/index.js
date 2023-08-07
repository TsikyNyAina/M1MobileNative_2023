"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const entity = __importStar(require("../entity"));
dotenv_1.default.config();
const db = new typeorm_1.DataSource({
    type: 'mysql',
    host: (_a = process.env.DATABASE_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    port: +((_b = process.env.DATABASE_PORT) !== null && _b !== void 0 ? _b : 3306),
    username: (_c = process.env.DATABASE_USERNAME) !== null && _c !== void 0 ? _c : 'root',
    password: (_d = process.env.DATABASE_PASSWORD) !== null && _d !== void 0 ? _d : 'password',
    database: (_e = process.env.DATABASE_NAME) !== null && _e !== void 0 ? _e : 'projetm1',
    entities: Object.values(entity),
    logging: false,
    synchronize: false,
});
exports.datasource = db;
