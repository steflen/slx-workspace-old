import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly repository: Repository<Permission>,
  ) {}

  async create(options: { item: Permission }) {
    options.item = await this.repository.save(options.item);
    return { permission: options.item };
  }

  async update(options: { id: number; item: Permission }) {
    options.item.id = options.id;
    options.item = await this.repository.save(options.item);
    return { permission: options.item };
  }

  async delete(options: { id: number }) {
    await this.repository.delete(options.id);
    return { permission: null };
  }

  async findById(options: { id: number }) {
    const item = await this.repository.findOneOrFail(options.id, {
      relations: ['contentType'],
    });
    return { permission: item };
  }

  async findAll(options: {
    curPage: number;
    perPage: number;
    q?: string;
    group?: number;
    contentType?: number;
    sort?: string;
  }) {
    let qb = this.repository.createQueryBuilder('permission');
    qb = qb.leftJoinAndSelect('permission.contentType', 'contentType');
    if (options.group) {
      qb = qb.leftJoin('permission.groups', 'group').where('group.id = :group', { group: options.group });
    }
    if (options.q) {
      qb = qb.where('permission.name like :q or permission.title like :q or permission.id = :id', {
        q: `%${options.q}%`,
        id: +options.q,
      });
    }
    if (options.contentType) {
      qb = qb.where('contentType.id = :contentType', {
        contentType: options.contentType,
      });
    }
    options.sort =
      // eslint-disable-next-line no-prototype-builtins
      options.sort && new Permission().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
    const field = options.sort.replace('-', '');
    if (options.sort) {
      if (options.sort[0] === '-') {
        qb = qb.orderBy('permission.' + field, 'DESC');
      } else {
        qb = qb.orderBy('permission.' + field, 'ASC');
      }
    }
    qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
    const objects: [Permission[], number] = await qb.getManyAndCount();
    return {
      permissions: objects[0],
      meta: {
        perPage: options.perPage,
        totalPages: options.perPage > objects[1] ? 1 : Math.ceil(objects[1] / options.perPage),
        totalResults: objects[1],
        curPage: options.curPage,
      },
    };
  }
}
