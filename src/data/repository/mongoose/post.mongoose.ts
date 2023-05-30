import { DB_TABLES } from "../../../application/config/enum/db_table";
import { PostEntity } from "../../../domain/entities/post.entity";
import { PostRepository } from "../../../domain/repositories/post.repository";
import { BaseMongoose } from "../../../application/core/base/mongoose.base";
import { injectable } from "inversify";

@injectable()
export class PostMongooseRepository
  extends BaseMongoose<PostEntity>
  implements PostRepository
{
  constructor() {
    super(DB_TABLES.POST);
  }
}
