import { PageMetaDto, PageOptionsDto } from '@slx/api-core';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async paginate(
    this: SelectQueryBuilder<UserEntity>,
    pageOptionsDto: PageOptionsDto,
  ): Promise<[UserEntity[], PageMetaDto]> {
    const [items, itemCount] = await this.skip(pageOptionsDto.skip).take(pageOptionsDto.take).getManyAndCount();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return [items, pageMetaDto];
  }
}
