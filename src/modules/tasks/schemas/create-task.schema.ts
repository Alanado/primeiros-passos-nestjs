import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  start_at: z.string().transform((data) => new Date(data)),
  end_at: z.string().transform((data) => new Date(data)),
  status: z.enum(['PENDENTE', 'EM ANDAMENTO', 'CONCLUÍDA']),
  priority: z.enum(['BAIXA', 'MÉDIA', 'ALTA']),
});

export class CreateTaskSchemaDTO extends createZodDto(CreateTaskSchema) {}
