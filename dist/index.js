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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const data_source_1 = require("./data-source"); // Supondo que você tenha configurado o data-source
require("reflect-metadata");
// Inicialize a conexão com o banco de dados
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    // Configure as rotas
    routes_1.AppRoutes.forEach((route) => {
        app[route.method](route.path, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield route.action(req, res);
                next();
            }
            catch (err) {
                next(err);
            }
        }));
    });
    // Inicia o servidor
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
})
    .catch((error) => console.log("Erro ao conectar ao banco de dados", error));
