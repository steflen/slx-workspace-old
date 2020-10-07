import { registerAs } from '@nestjs/config';
import { Options } from 'express-rate-limit';

// TODO: add redis for memorystorage

export default registerAs(
  'rateLimit',
  () =>
    ({
      windowMs: process.env.TIME_WINDOW || 5 * 60 * 1000, // 5 minutes
      max: process.env.MAX_REQUESTS || 100, // limit each IP to 100 requests per windowMs
      skipFailedRequests: true,
      message: 'Too many requests! You are blocked!',
      // handler(req: e.Request, res: e.Response, next: e.NextFunction): any {},
    } as Options),
);
