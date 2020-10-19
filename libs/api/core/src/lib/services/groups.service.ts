import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { Group } from '../entities/group.entity';

@Injectable()
export class GroupsService {
  items: Group[];

  constructor(@InjectRepository(Group) private readonly repository: Repository<Group>) {}
  async create(options: { item: Group }) {
    options.item = await this.repository.save(options.item);
    return { group: options.item };
  }

  async update(options: { id: number; item: Group }) {
    options.item.id = options.id;
    options.item = await this.repository.save(options.item);
    return { group: options.item };
  }

  async delete(options: { id: number }) {
    let item = await this.repository.findOneOrFail(options.id);
    item.permissions = [];
    item = await this.repository.save(item);
    await this.repository.delete(options.id);
    return { group: null };
  }

  async findById(options: { id: number }) {
    const item = await this.repository.findOneOrFail(options.id, {
      relations: ['permissions'],
    });
    return { group: item };
  }

  async findAll(options: { curPage: number; perPage: number; q?: string; sort?: string }) {
    let qb = this.repository.createQueryBuilder('group');
    qb = qb.leftJoinAndSelect('group.permissions', 'permission');
    qb = qb.leftJoinAndSelect('permission.contentType', 'contentType');
    if (options.q) {
      qb = qb.where('group.title like :q or group.name like :q or group.id = :id', {
        q: `%${options.q}%`,
        id: +options.q,
      });
    }
    // eslint-disable-next-line no-prototype-builtins
    options.sort = options.sort && new Group().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
    const field = options.sort.replace('-', '');
    if (options.sort) {
      if (options.sort[0] === '-') {
        qb = qb.orderBy('group.' + field, 'DESC');
      } else {
        qb = qb.orderBy('group.' + field, 'ASC');
      }
    }
    qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
    const objects: [Group[], number] = await qb.getManyAndCount();
    return {
      groups: objects[0],
      meta: {
        perPage: options.perPage,
        totalPages: options.perPage > objects[1] ? 1 : Math.ceil(objects[1] / options.perPage),
        totalResults: objects[1],
        curPage: options.curPage,
      },
    };
  }

  getGroupByName(options: { name: string }) {
    const groups = (this.items ? this.items : []).filter((group) => group.name === options.name);
    if (groups.length) {
      return groups[0];
    }
    throw new NotFoundException(`Group with name "${options.name}" not exists`);
  }

  async preloadAll() {
    if (!this.items) {
      const groups = await this.repository
        .createQueryBuilder('group')
        .leftJoinAndSelect('group.permissions', 'permission')
        .getMany();
      this.items = plainToClass(Group, groups);
      // Logger.log(JSON.stringify(groups.map(group => group.name)), GroupsService.name);
    }
  }
}
