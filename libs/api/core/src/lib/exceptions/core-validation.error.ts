import { ValidationError } from 'class-validator';

export class CoreValidationError extends Error {
  errors: ValidationError[];

  constructor(errors: ValidationError[]) {
    super();
    this.errors = errors;
  }
}
