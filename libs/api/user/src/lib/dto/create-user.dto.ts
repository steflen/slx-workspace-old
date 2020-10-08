export class CreateUserDto {
  firstName: string;
  lastName: string;

  toJson() {
    return { firstName: this.firstName, lastName: this.lastName };
  }
}
