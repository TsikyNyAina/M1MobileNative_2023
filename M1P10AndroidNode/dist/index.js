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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const rest = __importStar(require("./strict/rest"));
const cast = __importStar(require("./strict/cast"));
const json = __importStar(require("./strict/json"));
const controller = __importStar(require("./controller"));
const swagger_json_1 = __importDefault(require("./strict/swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socket_1 = require("./socket");
dotenv_1.default.config();
const upload = (0, multer_1.default)({ storage: multer_1.default.diskStorage({
        destination: path_1.default.join(__dirname.replace("/dist", ""), "uploads"),
        filename: (req, file, cb) => {
            // Customize the filename here
            // The original filename can be accessed through file.originalname
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const fileExtension = path_1.default.extname(file.originalname);
            cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
        }
    }) });
for (let v of Object.values(rest) || [])
    v();
for (let v of Object.values(cast) || [])
    v();
for (let v of Object.values(json) || [])
    v();
database_1.datasource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: "50mb" }));
    app.use(express_1.default.raw({ limit: "50mb" }));
    app.use(express_1.default.urlencoded({ limit: "50mb", extended: false }));
    const port = process.env.port || 3000;
    const hostname = process.env.hostname || '0.0.0.0';
    app.post("/media", upload.single("file"));
    app.use("/uploads/", function (req, res) {
        const filename = req.url;
        const filePath = path_1.default.join(__dirname.replace("/dist", ""), "uploads", filename);
        res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
        res.sendFile(filePath);
    });
    for (let c of Object.values(controller))
        new c().rest(app);
    app.use("/documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, { explorer: true }));
    const server = http_1.default.createServer(app);
    (0, socket_1.initSocket)(server, app);
    app.get("/testnotif", (req, res) => {
        res.send((0, socket_1.sendNotif)({
            title: "hello world",
            content: "METY "
        }));
    });
    server.listen(+port, hostname, () => console.log(`http://${hostname}:${port}`));
});
