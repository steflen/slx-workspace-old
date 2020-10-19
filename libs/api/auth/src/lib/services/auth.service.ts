import { BadRequestException, HttpService, Inject, Injectable } from '@nestjs/common';
import { CoreError, CORE_CONFIG_TOKEN, GroupsService, ICoreConfig, User, UsersService } from '@slx/api-core';
import { plainToClass } from 'class-transformer';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';

@Injectable()
export class AuthService {
  private localUri: string;

  constructor(
    @Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig,
    private readonly httpService: HttpService,
    private readonly usersService: UsersService,
    private readonly groupsService: GroupsService,
  ) {
    if (this.coreConfig.port) {
      this.localUri = `http://${this.coreConfig.domain}:${this.coreConfig.port}`;
    } else {
      this.localUri = `http://${this.coreConfig.domain}`;
    }
  }

  async info(options: { id: number }) {
    try {
      return await this.usersService.findById(options);
    } catch (error) {
      throw error;
    }
  }

  async signIn(options: SignInDto) {
    const { user } = await this.usersService.findByEmail(options);
    if (!(await user.validatePassword(options.password))) {
      throw new CoreError('Wrong password');
    }
    return await this.usersService.update({ id: user.id, item: user });
  }

  async signUp(options: SignUpDto) {
    try {
      await this.groupsService.preloadAll();
    } catch (error) {
      throw new BadRequestException('Error in load groups');
    }

    await this.usersService.assertUsernameAndEmail({
      email: options.email,
      username: options.username,
    });

    const group = this.groupsService.getGroupByName({ name: 'user' });
    const newUser = await plainToClass(User, options).setPassword(options.password);
    newUser.groups = [group];
    return this.usersService.create({ item: newUser });
  }
}
