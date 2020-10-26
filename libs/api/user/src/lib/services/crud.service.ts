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

  public async update(id: string | number, partialEntity: QueryDeepPartialEntity<T>): Promise<T> {
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

  // delete(id: any): Promise<void> {
  //   return Promise.resolve(undefined);
  // }
  //
  // findAll(): Promise<IPagination<T>> {
  //   return Promise.resolve(undefined);
  // }
  //
  // findOne(id: string | number): Promise<T> {
  //   return Promise.resolve(undefined);
  // }
  //
  // update(id: any, dto: T): Promise<T> {
  //   return Promise.resolve(undefined);
  // }
}
