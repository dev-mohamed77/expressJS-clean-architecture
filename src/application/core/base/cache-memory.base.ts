import { BaseEntity } from "./entity.base";
import { PostEntity } from "../../../domain/entities/post.entity";
import { BaseRepository } from "./repository.base";
import { v4 as uuid } from "uuid";

export class CacheMemoryBase<
  IEntity extends BaseEntity
> extends BaseRepository<IEntity> {
  items: IEntity[];
  constructor() {
    super();
    this.items = [];
  }

  create(data: IEntity): Promise<IEntity> {
    data.id = uuid();
    const count = this.items.push(data);
    return Promise.resolve(this.items[count - 1]);
  }

  update(id: string, data: Partial<IEntity>): Promise<IEntity> {
    this.checkIdExist(id);

    const index = this.getIndexByID(id);

    if (index < 0) {
      throw new Error("id is not exist");
    }

    for (const key in data) {
      this.items[index][key] = data[key]!;
    }

    return Promise.resolve(this.items[index]);
  }

  getByID(id: string): Promise<IEntity> {
    this.checkIdExist(id);
    const index = this.getIndexByID(id);
    return Promise.resolve(this.items[index]);
  }

  getAll(): Promise<IEntity[]> {
    return Promise.resolve(this.items);
  }

  getOne(filter: Partial<IEntity>): Promise<IEntity | null> {
    return this.getMany(filter).then((items) =>
      items.length > 0 ? items[0] : null
    );
  }

  getMany(filter: Partial<IEntity>): Promise<IEntity[]> {
    let filterItems = this.items;

    for (const key in filter) {
      filterItems = filterItems.filter((item) => item[key] === filter[key]);
    }

    return Promise.resolve(filterItems);
  }

  delete(id: string): Promise<IEntity> {
    this.checkIdExist(id);
    const index = this.getIndexByID(id);

    if (index < 0) {
      //   handel error
    }

    this.items.splice(index, 1);

    return Promise.resolve(this.items[index]);
  }

  private checkIdExist(id: string) {
    if (!id) {
      throw new Error("id required");
    }
  }

  private getIndexByID(id: string): number {
    return this.items.findIndex((item) => item.id === id);
  }
}
