import { BaseEntity } from "./entity.base";

export abstract class BaseRepository<IEntity extends BaseEntity> {
  abstract create(params: IEntity): Promise<IEntity>;
  abstract update(id: string, params: Partial<IEntity>): Promise<IEntity>;
  abstract getByID(id: string): Promise<IEntity>;
  abstract getAll(filter?: Partial<IEntity>): Promise<IEntity[]>;
  abstract getOne(filter: Partial<IEntity>): Promise<IEntity | null>;
  abstract getMany(filter: Partial<IEntity>): Promise<IEntity[]>;
  abstract delete(id: string): Promise<IEntity>;
}
