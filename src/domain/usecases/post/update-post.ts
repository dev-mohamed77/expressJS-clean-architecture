import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../application/core/base/usecase.base";
import { PostEntity } from "../../entities/post.entity";
import { PostRepository } from "../../repositories/post.repository";
import { Types } from "../../../application/config/di_types";

@injectable()
export class UpdatePostUseCase implements BaseUseCase<PostEntity> {
  constructor(@inject(Types.POST_REPOSITORY) private repo: PostRepository) {}

  execute(id: string, params: Partial<PostEntity>): Promise<PostEntity> {
    return this.repo.update(id, params);
  }
}
