import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { LoginService } from './services/login.service';
import { JwtModule } from '@nestjs/jwt';
import { IUserRepository } from '../users/repositories/user.repository';
import { UserPrismaRepository } from '../users/repositories/prisma/user.prisma.repository';

@Module({
  controllers: [LoginController],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'testing_nestjs_vai_carai',
      signOptions: { expiresIn: '8h' },
    }),
  ],
  providers: [
    PrismaService,
    LoginService,
    { provide: IUserRepository, useClass: UserPrismaRepository },
  ],
})
export class LoginModule {}
