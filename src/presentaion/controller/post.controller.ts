import { NextFunction, Request, Response } from "express";
import { CreatePostUseCase } from "../../domain/usecases/post/create-post";
import { GetPostsUseCase } from "../../domain/usecases/post/get-posts";
import { GetPostByIDUseCase } from "../../domain/usecases/post/get-post-by-id";
import { UpdatePostUseCase } from "../../domain/usecases/post/update-post";
import { DeletePostUseCase } from "../../domain/usecases/post/delete-post";
import { UserCacheMemoryRepository } from "../../data/repository/cache-memory/user.cache-memory";
import { PostMongooseRepository } from "../../data/repository/mongoose/post.mongoose";
import { BaseController } from "../../application/core/base/controller.base";
import { inject, injectable } from "inversify";
import { Types } from "../../application/config/di_types";
import { PostService } from "../services/post.service";

@injectable()
export class PostController implements BaseController {
  constructor(
    @inject(Types.POST_SERVICE)
    private postService: PostService
  ) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { description, image_url } = req.body;

    try {
      const result = await this.postService.create({
        description: description,
        image_url: image_url,
      });

      res.status(201).json({
        status: true,
        result: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        result: err,
      });
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.postService.getAll();

      res.status(200).json({
        status: true,
        result: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        result: err,
      });
    }
  }

  async getByID(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result = await this.postService.getByID(req.params.id);

      console.log(result);

      res.status(200).json({
        status: true,
        result: result,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: false,
        result: err,
      });
    }
  }
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { description, image_url } = req.body;
    try {
      const result = await this.postService.update(req.params.id, {
        description: description,
        image_url: image_url,
      });

      res.status(200).json({
        status: true,
        result: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        result: err,
      });
    }
  }
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await this.postService.delete(req.params.id);

      res.status(201).json({
        status: true,
        result: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        result: err,
      });
    }
  }
}
