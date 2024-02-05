import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { ICreateUserDTO } from '../dto/user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { username, email, password }: ICreateUserDTO,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _metadata: ArgumentMetadata,
  ) {
    if (!username) {
      throw new HttpException(
        'username is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (!email) {
      throw new HttpException(
        'email is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (!password) {
      throw new HttpException(
        'password is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      username,
      email,
      password,
    };
  }
}
