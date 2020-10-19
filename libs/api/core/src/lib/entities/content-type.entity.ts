import { IsNotEmpty, MaxLength, validateSync } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Permission } from '../entities/permission.entity';
import { CoreValidationError } from '../exceptions/core-validation.error';

@Entity({ name: 'content_types' })
export class ContentType {
  @PrimaryGeneratedColumn()
  id: number = undefined;

  @Column({ length: 100 })
  @IsNotEmpty()
  @MaxLength(100)
  name: string = undefined;

  @Column({ length: 255 })
  @IsNotEmpty()
  @MaxLength(255)
  title: string = undefined;

  @OneToMany((type) => Permission, (permission) => permission.contentType)
  permissions: Permission[];

  @BeforeInsert()
  doBeforeInsertion() {
    const errors = validateSync(this, { validationError: { target: false } });
    if (errors.length > 0) {
      throw new CoreValidationError(errors);
    }
  }

  @BeforeUpdate()
  doBeforeUpdate() {
    const errors = validateSync(this, { validationError: { target: false } });
    if (errors.length > 0) {
      throw new CoreValidationError(errors);
    }
  }
}
