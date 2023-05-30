import { Schema, model, connect } from "mongoose";
import { PostEntity } from "../../domain/entities/post.entity";

const postSchema = new Schema<PostEntity>(
  {
    description: { type: String, required: true },
    image_url: { type: String, required: true },
  },
  { timestamps: true }
);

export const PostSchema = model<PostEntity>("Post", postSchema);
