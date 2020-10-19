import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Inject, Logger } from '@nestjs/common';
import { ValidationError } from 'class-validator';
// noinspection ES6PreferShortImport
import { CORE_CONFIG_TOKEN } from '../configs/core.config';
// noinspection ES6PreferShortImport
import { CoreValidationError } from '../exceptions/core-validation.error';
// noinspection ES6PreferShortImport
import { CoreError } from '../exceptions/core.error';
// noinspection ES6PreferShortImport
import { ICoreConfig } from '../interfaces/core-config.interface';

@Catch(SyntaxError, CoreValidationError, CoreError, HttpException)
export class CoreExceptionFilter implements ExceptionFilter {
  constructor(@Inject(CORE_CONFIG_TOKEN) private readonly coreConfig: ICoreConfig) {}

  private response(
    exception: CoreValidationError | SyntaxError | Error | HttpException,
    host: ArgumentsHost,
    data: any,
    status?: number,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    Logger.error(JSON.stringify(exception), undefined, CoreExceptionFilter.name);
    if (request.originalUrl.indexOf('/api/') !== 0 && request.accepts('html') && this.coreConfig.indexFile) {
      response.sendFile(this.coreConfig.indexFile);
    } else {
      response.status(status ? status : HttpStatus.BAD_REQUEST).json(data);
    }
  }

  catch(exception: CoreValidationError | SyntaxError | Error | HttpException, host: ArgumentsHost) {
    const errors = {};
    if (exception instanceof CoreValidationError) {
      exception.errors.forEach((error: ValidationError) => {
        Object.keys(error.constraints).forEach((key: string) => {
          if (!errors[error.property]) {
            errors[error.property] = [];
          }
          errors[error.property].push(error.constraints[key]);
        });
      });
      this.response(exception, host, {
        validationErrors: errors,
      });
    }
    if (exception instanceof CoreError) {
      this.response(exception, host, {
        message: exception.message,
      });
    }
    if (exception instanceof SyntaxError) {
      this.response(exception, host, {
        message: 'Syntax error',
      });
    }
    if (exception instanceof HttpException) {
      this.response(
        exception,
        host,
        {
          message: exception.message && exception.message['message'] ? exception.message['message'] : 'Http exception',
        },
        exception.getStatus(),
      );
    }
  }
}
