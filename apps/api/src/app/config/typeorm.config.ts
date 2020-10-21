import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'typeorm',
  () =>
    ({
      uri: 'mongodb://localhost:27017/slx-workspace',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as TypeOrmModuleOptions),
);
