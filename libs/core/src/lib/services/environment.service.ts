import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT_TOKEN } from '../interfaces/environment.interface';

@Injectable()
export class EnvironmentService {
  constructor(@Inject(ENVIRONMENT_TOKEN) private env: Environment) {}

  print(): void {
    console.log(this.env);
  }
}
