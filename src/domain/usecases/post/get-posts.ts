import { Types } from "../../../application/config/di_types";
import { BaseUseCase } from "../../../application/core/base/usecase.base";
import { PostEntity } from "../../entities/post.entity";
import { PostRepository } from "../../repositories/post.repository";
import { inject, injectable } from "inversify";

@injectable()
export class GetPostsUseCase implements BaseUseCase<PostEntity[]> {
  constructor(@inject(Types.POST_REPOSITORY) private repo: PostRepository) {}

  execute(): Promise<PostEntity[]> {
    return this.repo.getAll();
  }
}
