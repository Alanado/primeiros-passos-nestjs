import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateUserService } from './services/create-user.service';
import { IUserRepository } from './repositories/user.repository';
import { UserPrismaRepository } from './repositories/prisma/user.prisma.repository';
import { ProfileUserService } from './services/profile-user.service';

@Module({
  controllers: [UserController],
  imports: [],
  providers: [
    PrismaService,
    CreateUserService,
    ProfileUserService,
    { provide: IUserRepository, useClass: UserPrismaRepository },
  ],
})
export class UserModule {}
