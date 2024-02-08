import { IUserRepository } from '../repositories/user.repository';

export class ProfileUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    return this.userRepository.findById(id);
  }
}
