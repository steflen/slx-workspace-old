import { PinoLogger } from 'nestjs-pino';
import { Model, Repository, Sequelize } from 'sequelize-typescript';
import { PaginationParams } from '../pagination/pagination-params';
import { ICrudService } from './crud-service.interface';
import { DeepPartial, QueryDeepPartialEntity } from './query.types';

export abstract class CrudService<T> implements ICrudService<T> {
  protected constructor(
    protected readonly sequelize: Sequelize,
    protected readonly repository: Repository<Model>,
    protected readonly log: PinoLogger,
  ) {}

  public async create(entity: DeepPartial<T>, ...args: any[]): Promise<T> {
    try {
      // await this.sequelize.transaction(async (transaction) => {
      //   this.log.info({ entity }, 'Creating transactional record');
      //   return await this.repository.create(entity, { transaction }); //create<T>(dto, { transaction });
      // });
      return await this.repository.create(entity).then();
    } catch (error) {
      this.log.error({ entity, error }, 'Failed to create record');
      return Promise.reject(error);
    }
  }

  public async update(id: string, data: QueryDeepPartialEntity<T>, ...args: any[]): Promise<T> {
    try {
      await this.sequelize.transaction(async (transaction) => {
        this.log.info('Update record at id %o ==> %o', data, id);
        await this.repository.update(data, { where: { id } });
      });
    } catch (err) {
      this.log.warn('Failed to update record. %o', err);
      return Promise.reject(err);
    }
  }

  public async findAll(pagination?: PaginationParams<T>): Promise<{ rows: Model<any, any>[]; count: number }> {
    const { rows, count } = await this.repository.findAndCountAll(/*pagination paramss....*/);
    this.log.info('Found %o items', count);
    return { rows, count };
  }

  public async findOne(id: string): Promise<T> {
    const record: any = await this.repository.findOne({ where: { id: id } });
    // if (!record) {
    //   throw new NotFoundException(`The requested record was not found`);
    // }
    return record;
  }

  public async delete(id: string, ...args: any[]): Promise<number> {
    // try {
    return this.repository.destroy({ where: { id: id } });
    // } catch (err) {
    //   throw new NotFoundException(`The record was not found`, err);
    // }
  }
}
