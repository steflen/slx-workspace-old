import { Injectable } from '@angular/core';

@Injectable()
export class SettingsDomainInitService {
  constructor(/*@Inject(ENVIRONMENT_TOKEN) private environment: Environment, private store: Store*/) {}

  public async init(): Promise<boolean> {
    return true;
  }
}
