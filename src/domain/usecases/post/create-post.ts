import { Types } from "../../../application/config/di_types";
import { BaseUseCase } from "../../../application/core/base/usecase.base";
import { PostEntity } from "../../entities/post.entity";
import { PostRepository } from "../../repositories/post.repository";
import { inject, injectable } from "inversify";

@injectable()
export class CreatePostUseCase implements BaseUseCase<PostEntity> {
  constructor(@inject(Types.POST_REPOSITORY) private repo: PostRepository) {}

  execute(params: PostEntity): Promise<PostEntity> {
    return this.repo.create(params);
  }
}
