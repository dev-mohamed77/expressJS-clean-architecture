import { BaseRepository } from "../../application/core/base/repository.base";
import { PostEntity } from "../entities/post.entity";

export abstract class PostRepository extends BaseRepository<PostEntity> {}
