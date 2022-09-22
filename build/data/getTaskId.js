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
exports.getTaskId = void 0;
const baseDataBase_1 = __importDefault(require("./baseDataBase"));
const getTaskId = (idTask) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, baseDataBase_1.default)('Tasks')
        .select("Tasks.id", "title", "description", "status", "limitdate", "user_id", "Users.nickname")
        .where('Tasks.id', idTask)
        .join('Users', 'Tasks.user_id', "Users.id");
    return task;
});
exports.getTaskId = getTaskId;
