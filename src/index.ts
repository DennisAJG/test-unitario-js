import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import { AppRoutes } from "./routes";
import { AppDataSource } from "./data-source"; // Supondo que você tenha configurado o data-source
import { Request, Response, NextFunction } from "express";
import "reflect-metadata";

// Inicialize a conexão com o banco de dados
AppDataSource.initialize()
    .then(() => {
        const app = express();
        app.use(express.json());

        // Configure as rotas
        AppRoutes.forEach((route) => {
          app[route.method as keyof express.Application](route.path, async (req: Request, res: Response, next: NextFunction) => {
            try {
                await route.action(req, res);
                next();
            } catch (err) {
                next(err);
            }
        });
        });

        // Inicia o servidor
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    })
    .catch((error) => console.log("Erro ao conectar ao banco de dados", error));
