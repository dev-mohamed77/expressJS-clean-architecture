import { Container } from "inversify";
import { PostRepository } from "./domain/repositories/post.repository";
import { PostMongooseRepository } from "./data/repository/mongoose/post.mongoose";
import { CreatePostUseCase } from "./domain/usecases/post/create-post";
import { GetPostByIDUseCase } from "./domain/usecases/post/get-post-by-id";
import { GetPostsUseCase } from "./domain/usecases/post/get-posts";
import { UpdatePostUseCase } from "./domain/usecases/post/update-post";
import { DeletePostUseCase } from "./domain/usecases/post/delete-post";
import { GetManyPostUseCase } from "./domain/usecases/post/get-many-post";
import { GetOnePostUseCase } from "./domain/usecases/post/get-one-post";
import { PostController } from "./presentaion/controller/post.controller";
import { BaseController } from "./application/core/base/controller.base";
import { Types } from "./application/config/di_types";
import { BaseService } from "./application/core/base/service.base";
import { PostService } from "./presentaion/services/post.service";

const myContainer = new Container({ skipBaseClassChecks: true });

// repositories
myContainer
  .bind<PostRepository>(Types.POST_REPOSITORY)
  .to(PostMongooseRepository);

// usecases
myContainer
  .bind<CreatePostUseCase>(Types.CREATE_POST_USECASE)
  .to(CreatePostUseCase);
myContainer
  .bind<GetPostByIDUseCase>(Types.GET_POST_BY_ID_USECASE)
  .to(GetPostByIDUseCase);
myContainer.bind<GetPostsUseCase>(Types.GET_POSTS_USECASE).to(GetPostsUseCase);
myContainer
  .bind<GetOnePostUseCase>(Types.GET_ONE_POST_USECASE)
  .to(GetOnePostUseCase);
myContainer
  .bind<GetManyPostUseCase>(Types.GET_MANY_POST_USECASE)
  .to(GetManyPostUseCase);
myContainer
  .bind<UpdatePostUseCase>(Types.UPDATE_POST_USECASE)
  .to(UpdatePostUseCase);
myContainer
  .bind<DeletePostUseCase>(Types.DELETE_POST_USECASE)
  .to(DeletePostUseCase);

// services
myContainer.bind(Types.POST_SERVICE).to(PostService);

// controllers
myContainer.bind<BaseController>(Types.POST_CONTROLLER).to(PostController);

export = myContainer;
