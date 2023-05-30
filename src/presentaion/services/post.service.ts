import { inject, injectable } from "inversify";
import { Types } from "../../application/config/di_types";
import { CreatePostUseCase } from "../../domain/usecases/post/create-post";
import { GetPostByIDUseCase } from "../../domain/usecases/post/get-post-by-id";
import { UpdatePostUseCase } from "../../domain/usecases/post/update-post";
import { DeletePostUseCase } from "../../domain/usecases/post/delete-post";
import { GetPostsUseCase } from "../../domain/usecases/post/get-posts";
import { BaseService } from "../../application/core/base/service.base";
import { PostEntity } from "../../domain/entities/post.entity";

@injectable()
export class PostService implements BaseService<PostEntity> {
  constructor(
    @inject(Types.CREATE_POST_USECASE)
    private createPostUseCase: CreatePostUseCase,
    @inject(Types.GET_POSTS_USECASE) private getPostsUseCase: GetPostsUseCase,
    @inject(Types.GET_POST_BY_ID_USECASE)
    private getPostByIDUseCase: GetPostByIDUseCase,
    @inject(Types.UPDATE_POST_USECASE)
    private updatePostUseCase: UpdatePostUseCase,
    @inject(Types.DELETE_POST_USECASE)
    private deletePostUseCase: DeletePostUseCase
  ) {}

  create(params: PostEntity): Promise<PostEntity> {
    return this.createPostUseCase.execute(params);
  }

  update(id: string, params: Partial<PostEntity>): Promise<PostEntity> {
    return this.updatePostUseCase.execute(id, params);
  }

  getByID(id: string): Promise<PostEntity> {
    return this.getPostByIDUseCase.execute(id);
  }

  getAll(filter?: Partial<PostEntity> | undefined): Promise<PostEntity[]> {
    return this.getPostsUseCase.execute();
  }

  delete(id: string): Promise<PostEntity> {
    return this.deletePostUseCase.execute(id);
  }
}
