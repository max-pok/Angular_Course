import { AppError } from './../utilities/app-error';
export class BadRequestError extends AppError {
  constructor(public originalError?: any) {
    super(originalError);
  }
}