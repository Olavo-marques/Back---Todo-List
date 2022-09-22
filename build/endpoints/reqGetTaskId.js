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
Object.defineProperty(exports, "__esModule", { value: true });
const getTaskId_1 = require("../data/getTaskId");
const reqGetTaskId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idTask = req.params.id;
        const task = yield (0, getTaskId_1.getTaskId)(idTask);
        if (!task) {
            res.statusCode = 500;
            throw new Error('Erro no servidor, tente mais tarde.');
        }
        const formattedTask = task.map((tas) => {
            const taskDataAmerican = tas.limitdate;
            const dateWithoutSlash = taskDataAmerican.split("/");
            const dateInReverse = dateWithoutSlash.reverse();
            const dateBrazilianFormat = dateInReverse.join("/");
            const updatedDate = {
                id: tas.id,
                title: tas.title,
                description: tas.description,
                status: tas.status,
                limitdate: dateBrazilianFormat,
                user_id: tas.user_id,
                nickname: tas.nickname
            };
            return updatedDate;
        });
        res.status(200).send(formattedTask);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
exports.default = reqGetTaskId;
