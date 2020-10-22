import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostDto } from '../dto/post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post as PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';

@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: [PostDto] })
  findAll(): Promise<PostDto[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostDto })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PostDto> {
    return this.postService.findOne(id);
  }

  @Post()
  @ApiCreatedResponse({ type: PostModel })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPostDto: CreatePostDto, @Req() request): Promise<PostModel> {
    return this.postService.create(request.user.id, createPostDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: PostModel })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Req() request,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<PostModel> {
    return this.postService.update(id, request.user.id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostModel })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id', new ParseIntPipe()) id: number, @Req() request): Promise<PostModel> {
    return this.postService.delete(id, request.user.id);
  }
}
