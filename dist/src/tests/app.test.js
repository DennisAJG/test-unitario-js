var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from "supertest";
import app from "../src/index";
describe("GET /posts", () => {
    it("deve retornar uma lista vazia de posts", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app).get("/posts");
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    }));
});