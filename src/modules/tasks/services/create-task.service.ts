import { Injectable } from '@nestjs/common';
import { ITaskRepository } from '../repositories/task.repository';
import { CreateTaskDTO } from '../dto/create-task.dto';

@Injectable()
export class CreateTaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(data: CreateTaskDTO) {
    return await this.taskRepository.save(data);
  }
}
