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
const creatUser_1 = require("../data/creatUser");
const getAllUsers_1 = __importDefault(require("../data/getAllUsers"));
const reqCreatUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email } = req.body;
        if (!name || !nickname || !email) {
            res.statusCode = 401;
            throw new Error('Verifique se todos os campos estão preechidos e tente novamente.');
        }
        const allUsers = yield (0, getAllUsers_1.default)();
        allUsers.filter((all) => {
            if (all.name === name) {
                res.statusCode = 401;
                throw new Error('Este nome esta em uso.');
            }
            else if (all.nickname === nickname) {
                res.statusCode = 401;
                throw new Error('Este nickname esta em uso.');
            }
            else if (all.email === email) {
                res.statusCode = 401;
                throw new Error('E-mail já cadastrado, tente outro.');
            }
        });
        yield (0, creatUser_1.creatUser)(name, nickname, email);
        res.status(201).send("O usuário criado com sucesso!");
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
exports.default = reqCreatUser;
