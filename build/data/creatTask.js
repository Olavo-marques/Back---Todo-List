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
exports.creatTask = void 0;
const baseDataBase_1 = __importDefault(require("./baseDataBase"));
const creatTask = (title, description, limitdate, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const deadlineWithoutSlash = limitdate.split("/");
    const deadlineInReverse = deadlineWithoutSlash.reverse();
    const deadlineForAmerican = deadlineInReverse.join("/");
    yield baseDataBase_1.default.raw(`
    INSERT INTO Tasks(id , title , description, limitdate, user_id)
    VALUES(
        "${Date.now().toString()}",
        "${title}",
        "${description}",
        "${deadlineForAmerican}",
        "${user_id}"
        );
    `);
});
exports.creatTask = creatTask;
