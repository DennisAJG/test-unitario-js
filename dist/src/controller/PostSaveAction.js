var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getManager } from "typeorm";
import { Post } from "../entity/Post";
/**
 * Saves given post.
 */
export function postSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Post);
        // create a real post object from post json object sent over http
        const newPost = postRepository.create(request.body);
        // save received post
        yield postRepository.save(newPost);
        // return saved post back
        response.send(newPost);
    });
}
