import { Model } from "mongoose";
import "reflect-metadata";
import { BaseEntity } from "./entity.base";
import { BaseRepository } from "./repository.base";
import { inject, injectable, unmanaged } from "inversify";
import { DB_TABLES } from "../../config/enum/db_table";
import { ALL_TABLES } from "../utilities/all_table.utilities";

@injectable()
export class BaseMongoose<
  IEntity extends BaseEntity
> extends BaseRepository<IEntity> {
  private model: Model<IEntity>;

  constructor(tableName: DB_TABLES) {
    super();
    this.model = ALL_TABLES[tableName] as Model<IEntity>;
  }

  create(params: IEntity): Promise<IEntity> {
    return this.model.create(params);
  }

  async update(id: string, params: Partial<IEntity>): Promise<IEntity> {
    const result = await this.model.findByIdAndUpdate(id, params, {
      new: true,
    });
    if (!result) {
      throw new Error("id is noe Exist");
    }

    return result;
  }

  async getByID(id: string): Promise<IEntity> {
    const result = await this.model.findById(id);
    if (!result) {
      throw new Error("id is noe Exist");
    }

    return result;
  }

  getAll(filter: Partial<IEntity>): Promise<IEntity[]> {
    return this.model.find(filter);
  }

  getOne(filter: Partial<IEntity>): Promise<IEntity | null> {
    return this.model.findOne(filter);
  }

  getMany(filter: Partial<IEntity>): Promise<IEntity[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<IEntity> {
    const result = await this.model.findByIdAndDelete(id);
    if (!result) {
      throw new Error("id is noe Exist");
    }

    return result;
  }
}
