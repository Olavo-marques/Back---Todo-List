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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatUser = void 0;
const baseDataBase_1 = __importDefault(require("./baseDataBase"));
const creatUser = (name, nickname, email) => __awaiter(void 0, void 0, void 0, function* () {
    yield baseDataBase_1.default.raw(`
    INSERT INTO Users(id, name, nickname, email)
    VALUES(
        "${Date.now().toString()}",
        "${name}",
        "${nickname}",
        "${email}"
    );
`);
});
exports.creatUser = creatUser;
