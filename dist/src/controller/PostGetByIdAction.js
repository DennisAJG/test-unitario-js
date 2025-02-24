import { getManager } from "typeorm";
import { Post } from "../entity/Post";
/**
 * Loads post by a given id.
 */
export async function postGetByIdAction(request, response) {
    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);
    // load a post by a given post id
    const post = await postRepository.findOneBy({ id: parseInt(request.params.id) });
    // if post was not found return 404 to the client
    if (!post) {
        response.status(404);
        response.end();
        return;
    }
    // return loaded post
    response.send(post);
}
