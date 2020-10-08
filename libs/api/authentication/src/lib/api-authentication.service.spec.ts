import { Test } from '@nestjs/testing';
import { ApiAuthenticationService } from './api-authentication.service';

describe('ApiAuthenticationService', () => {
  let service: ApiAuthenticationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ApiAuthenticationService],
    }).compile();

    service = module.get(ApiAuthenticationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
