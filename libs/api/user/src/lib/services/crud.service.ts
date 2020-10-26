import { PaginationParams } from '@slx/api-user/interfaces/pagination.interface';
import { PinoLogger } from 'nestjs-pino';
import { Model, Repository, Sequelize } from 'sequelize-typescript';
import { DeepPartial, ICrudService, QueryDeepPartialEntity } from '../interfaces/crud-service.interface';

export abstract class CrudService<T> implements ICrudService<T> {
  protected constructor(
    protected readonly sequelize: Sequelize,
    protected readonly repository: Repository<Model>,
    protected readonly log: PinoLogger,
  ) {}

  public async create(entity: DeepPartial<T>): Promise<T> {
    try {
      await this.sequelize.transaction(async (transaction) => {
        this.log.info('Create record %o', entity);
        return await this.repository.create(entity); //create<T>(dto, { transaction });
      });
    } catch (err) {
      this.log.warn('Failed to create record %o', entity);
      return Promise.resolve(err);
    }
  }

  public async update(id: string, partialEntity: QueryDeepPartialEntity<T>): Promise<T> {
    try {
      await this.sequelize.transaction(async (transaction) => {
        this.log.info('Update record at id %o ==> %o', partialEntity, id);
        await this.repository.update(partialEntity, { where: { id } });
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

  public async delete(id: string): Promise<number> {
    // try {
    return this.repository.destroy({ where: { id: id } });
    // } catch (err) {
    //   throw new NotFoundException(`The record was not found`, err);
    // }
  }
}