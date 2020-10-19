import { APP_FILTER } from '@nestjs/core';
import { CoreExceptionFilter } from './core-exception.filter';

export const CORE_APP_FILTERS = [{ provide: APP_FILTER, useClass: CoreExceptionFilter, multi: true }];
