import { BaseEntity } from "./entity.base";

export interface BaseService<IEntity extends BaseEntity> {
  create(params: IEntity): Promise<IEntity>;
  update(id: string, params: Partial<IEntity>): Promise<IEntity>;
  getByID(id: string): Promise<IEntity>;
  getAll(filter?: Partial<IEntity>): Promise<IEntity[]>;
  delete(id: string): Promise<IEntity>;
}
