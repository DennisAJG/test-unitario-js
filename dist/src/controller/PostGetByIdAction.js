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
 * Loads post by a given id.
 */
export function postGetByIdAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(Post);
        // load a post by a given post id
        const post = yield postRepository.findOneBy({ id: parseInt(request.params.id) });
        // if post was not found return 404 to the client
        if (!post) {
            response.status(404);
            response.end();
            return;
        }
        // return loaded post
        response.send(post);
    });
}
