import { BaseEntity } from "../../application/core/base/entity.base";

export class PostEntity extends BaseEntity {
  description?: string;
  image_url?: string;
  created_at?: Date;
  updated_at?: Date;
}
