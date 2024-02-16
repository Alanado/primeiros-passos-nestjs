import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const CreateUserSchema = z.object({
  username: z.string({ required_error: 'username is required.' }),
  email: z.string().email({ message: 'email is a bad format.' }),
  password: z.string({ required_error: 'password is required.' }),
});

export class CreateUserDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponse = CreateUserSchema.omit({ password: true });

export type CreateUserResponse = z.infer<typeof CreateUserResponse>;
