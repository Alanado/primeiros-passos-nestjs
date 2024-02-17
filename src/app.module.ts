import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { LoginModule } from './modules/login/login.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [UserModule, LoginModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
