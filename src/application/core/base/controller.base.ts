import { Request, Response, NextFunction } from "express";
import { BaseEntity } from "./entity.base";

export abstract class BaseController {
  abstract create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract getByID(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  abstract delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
}
