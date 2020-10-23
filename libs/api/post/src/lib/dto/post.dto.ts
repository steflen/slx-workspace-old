import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../models/post.model';

export class PostDto {
  @ApiProperty()
  readonly id: string;

  // @ApiProperty()
  // readonly userId: string;

  // @ApiProperty()
  // readonly authorFirstName: string;
  //
  // @ApiProperty()
  // readonly authorLastName: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(post: Post) {
    this.id = post.id;
    // this.userId = post.userId;
    // this.authorFirstName = post.user.profile.firstName;
    // this.authorLastName = post.user.profile.lastName;
    this.title = post.title;
    this.content = post.content;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;
  }
}
