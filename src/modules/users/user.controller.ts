import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { ICreateUserDTO } from './dto/user.dto';
import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';

@Controller('/user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: ICreateUserDTO) {
    return await this.createUserService.execute(data);
  }

  @Get()
  @UseGuards(AuthGuard)
  async show() {
    return 'ok';
  }
}
