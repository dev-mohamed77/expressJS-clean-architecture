import { BaseRepository } from "../../../application/core/base/repository.base";
import { PostEntity } from "../../../domain/entities/post.entity";
import { PostRepository } from "../../../domain/repositories/post.repository";
import { CacheMemoryBase } from "../../../application/core/base/cache-memory.base";
import { injectable } from "inversify";

@injectable()
export class UserCacheMemoryRepository
  extends CacheMemoryBase<PostEntity>
  implements PostRepository {}
