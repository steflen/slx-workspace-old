import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// import { User } from '../../../../user/src/lib/models/user.model';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostDto } from '../dto/post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  constructor(
    @Inject('PostRepository')
    private readonly postRepository: typeof Post,
  ) {}

  async findAll() {
    const post = await this.postRepository.findAll<Post>(/*{
      include: [User],
    }*/);
    return post.map((post) => new PostDto(post));
  }

  async findOne(id: number) {
    const post = await this.postRepository.findByPk<Post>(id /*, {
      include: [User],
    }*/);
    if (!post) {
      throw new HttpException('No post found', HttpStatus.NOT_FOUND);
    }
    return new PostDto(post);
  }

  async create(userId: string, createPostDto: CreatePostDto) {
    const post = new Post();
    // post.userId = userId;
    post.title = createPostDto.title;
    post.content = createPostDto.content;
    return post.save();
  }

  private async getUserPost(id: number, userId: string) {
    const post = await this.postRepository.findByPk<Post>(id);
    if (!post) {
      throw new HttpException('No post found', HttpStatus.NOT_FOUND);
    }
    // if (post.userId !== userId) {
    //   throw new HttpException('You are unauthorized to manage this post', HttpStatus.UNAUTHORIZED);
    // }

    return post;
  }

  async update(id: number, userId: string, updatePostDto: UpdatePostDto) {
    const post = await this.getUserPost(id, userId);
    post.title = updatePostDto.title || post.title;
    post.content = updatePostDto.content || post.content;
    return post.save();
  }

  async delete(id: number, userId: string) {
    const post = await this.getUserPost(id, userId);
    await post.destroy();
    return post;
  }
}
