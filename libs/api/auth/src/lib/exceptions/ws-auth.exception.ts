import { HttpStatus } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

export class WsAuthException extends WsException {
  constructor(message, error) {
    super({ statusCode: HttpStatus.UNAUTHORIZED, error, message });
  }
}
