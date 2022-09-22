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
const editUserId_1 = require("../data/editUserId");
const reqEditUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idParams = req.params.id;
        const { name, nickname } = req.body;
        if (!name || !nickname) {
            res.statusCode = 401;
            throw new Error('Confira se todos os campos estão preenchidos.');
        }
        yield (0, editUserId_1.editUserId)(idParams, name, nickname);
        res.status(200).send('Usuário atualizado com sucesso.');
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
exports.default = reqEditUserId;
