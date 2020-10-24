import { HttpException, HttpStatus } from '@nestjs/common';

export class HttpAuthException extends HttpException {
  constructor(message, error) {
    super({ statusCode: HttpStatus.UNAUTHORIZED, error, message }, HttpStatus.UNAUTHORIZED);
  }
}
