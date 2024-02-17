import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateTaskService } from './services/create-task.service';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { CreateTaskSchemaDTO } from './schemas/create-task.schema';

@Controller('/task')
export class TaskController {
  constructor(private createTaskService: CreateTaskService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Request() req, @Body() data: CreateTaskSchemaDTO) {
    return await this.createTaskService.execute({
      ...data,
      userId: req.user.sub,
    });
  }
}
