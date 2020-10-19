import { registerAs } from '@nestjs/config';
import * as packageJson from '../../../../../package.json';
import * as tsconfigJson from '../../../../../tsconfig.base.json';

export default registerAs('project', () => ({
  tsconfig: tsconfigJson,
  package: packageJson,
}));
