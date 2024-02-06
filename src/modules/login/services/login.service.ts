import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';
import { loginDTO } from '../dto/login.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async execute(data: loginDTO) {
    const user = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isEqualPassword = await compare(data.password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_key: token,
    };
  }
}
