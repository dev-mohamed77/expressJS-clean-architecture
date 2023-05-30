import { Model } from "mongoose";
import { PostSchema } from "../../../data/model/post.schema";
import { DB_TABLES } from "../../config/enum/db_table";

export const ALL_TABLES: { [key: string]: Model<any> } = {
  [DB_TABLES.POST]: PostSchema,
};
