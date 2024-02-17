import { Injectable } from '@nestjs/common';
import { ITaskRepository } from '../task.repository';
import { CreateTaskDTO, CreatedTaskDTO } from '../../dto/create-task.dto';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class TaskPrismaRepository implements ITaskRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: CreateTaskDTO): Promise<CreatedTaskDTO> {
    return await this.prisma.task.create({
      data: {
        taskUser: {
          create: {
            userId: data.userId,
          },
        },
        description: data.description,
        title: data.title,
        start_at: data.start_at,
        end_at: data.end_at,
        priority: data.priority,
        status: data.status,
      },
    });
  }
}
