import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/infra/database/prisma.service';
import { CreateTaskService } from './services/create-task.service';
import { ITaskRepository } from './repositories/task.repository';
import { TaskPrismaRepository } from './repositories/prisma/task.prisma.repository';

@Module({
  controllers: [TaskController],
  providers: [
    PrismaService,
    CreateTaskService,
    { provide: ITaskRepository, useClass: TaskPrismaRepository },
  ],
  imports: [],
})
export class TaskModule {}
