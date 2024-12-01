"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Post_1 = require("./entity/Post"); // Ajuste os caminhos para suas entidades
const Category_1 = require("./entity/Category");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Post_1.Post, Category_1.Category],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
});
