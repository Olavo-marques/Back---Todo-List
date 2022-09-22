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
const creatTask_1 = require("../data/creatTask");
const reqCreatTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, limitdate, user_id } = req.body;
        if (!title || !description || !limitdate || !user_id) {
            req.statusCode = 401;
            throw new Error('Existem campos vazios.');
        }
        yield (0, creatTask_1.creatTask)(title, description, limitdate, user_id);
        res.status(200).send('Tarefa criada com sucesso');
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
exports.default = reqCreatTask;
