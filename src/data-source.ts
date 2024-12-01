import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

// Carrega variáveis de ambiente do .env
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql", // Ou 'mariadb'
  host: process.env.DB_HOST, // Carregado do .env
  port: parseInt(process.env.DB_PORT || "3306", 10), // Carregado do .env
  username: process.env.DB_USERNAME, // Carregado do .env
  password: process.env.DB_PASSWORD, // Carregado do .env
  database: process.env.DB_DATABASE, // Carregado do .env
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  synchronize: false, // Use 'true' apenas em desenvolvimento
  logging: false,
});

// Exporta o DataSource como padrão para o TypeORM CLI
export default AppDataSource;