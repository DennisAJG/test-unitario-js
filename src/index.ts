import "reflect-metadata";
import express from "express"; // Certifique-se de que o Express esteja instalado
import { AppDataSource } from "./data-source";

const app = express();

// Middlewares básicos
app.use(express.json());

// Exemplo de rota
app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Inicializa o banco de dados e o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado com sucesso!");

    // Inicializa o servidor na porta 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });