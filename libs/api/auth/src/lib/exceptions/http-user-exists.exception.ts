import { HttpException, HttpStatus } from '@nestjs/common';

export class HttpUserExistsException extends HttpException {
  constructor(message, error) {
    super({ statusCode: HttpStatus.CONFLICT, error, message }, HttpStatus.CONFLICT);
  }
}
