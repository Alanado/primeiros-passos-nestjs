import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  // UsePipes,
} from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
// import { ICreateUserDTO } from './dto/user.dto';
// import { CreateUserValidationPipe } from './pipes/create-user.validation.pipe';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { ProfileUserService } from './services/profile-user.service';
import {
  CreateUserDTO,
  CreateUserResponse,
} from './schemas/create-user.schema';

@Controller('/user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly profileUser: ProfileUserService,
  ) {}

  @Post()
  // @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserDTO) {
    const user = await this.createUserService.execute(data);
    return CreateUserResponse.safeParse(user);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async show(@Request() req) {
    return await this.profileUser.execute(req.user.sub);
  }
}
