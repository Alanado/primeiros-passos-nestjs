import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { loginDTO } from './dto/login.dto';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/login')
  async login(@Body() data: loginDTO) {
    const token = await this.loginService.execute(data);
    return token;
  }
}
