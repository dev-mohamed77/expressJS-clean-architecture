import { NextFunction, Request, Response, Router } from "express";
import { PostController } from "../controller/post.controller";
import { PostMongooseRepository } from "../../data/repository/mongoose/post.mongoose";
import { CreatePostUseCase } from "../../domain/usecases/post/create-post";
import { GetPostsUseCase } from "../../domain/usecases/post/get-posts";
import { GetPostByIDUseCase } from "../../domain/usecases/post/get-post-by-id";
import { UpdatePostUseCase } from "../../domain/usecases/post/update-post";
import { DeletePostUseCase } from "../../domain/usecases/post/delete-post";
import { PostSchema } from "../../data/model/post.schema";
import myContainer from "../../dependency_injection";
import { Types } from "../../application/config/di_types";
import { PostEndPoint } from "../../application/config/enum/endpoints";

const router = Router();

const postController = myContainer.get<PostController>(Types.POST_CONTROLLER);

router
  .route("/")
  .post((req: Request, res: Response, next: NextFunction) =>
    postController.create(req, res, next)
  )
  .get((req: Request, res: Response, next: NextFunction) =>
    postController.getAll(req, res, next)
  );
router
  .route(PostEndPoint.postID)
  .get((req: Request, res: Response, next: NextFunction) =>
    postController.getByID(req, res, next)
  )
  .put((req: Request, res: Response, next: NextFunction) =>
    postController.update(req, res, next)
  )
  .delete((req: Request, res: Response, next: NextFunction) =>
    postController.delete(req, res, next)
  );

export = router;
