import { ICreateUserDTO } from '../dto/user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserDTO) {
    const userExist = await this.userRepository.findByUsernameOrEmail({
      email: data.email,
      username: data.username,
    });

    if (userExist) {
      throw new HttpException('User already exists.', HttpStatus.BAD_REQUEST);
    }

    const password = await hash(data.password, 10);

    return await this.userRepository.save({
      ...data,
      password,
    });
  }
}
