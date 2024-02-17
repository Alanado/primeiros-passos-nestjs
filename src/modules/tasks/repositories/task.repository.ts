import { CreateTaskDTO, CreatedTaskDTO } from '../dto/create-task.dto';

export abstract class ITaskRepository {
  abstract save(data: CreateTaskDTO): Promise<CreatedTaskDTO>;
}
