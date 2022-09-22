"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: process.env.BD_HOST,
        port: 3306,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.BD_SCHEMA,
        multipleStatements: true
    }
});
exports.default = connection;
