import { Router } from "express";
import postRouter from "../router/post.router";
import { PostEndPoint } from "../../application/config/enum/endpoints";

const router = Router();

router.use(PostEndPoint.root, postRouter);

export = router;
