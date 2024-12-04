import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthMiddleware } from './middleware/Auth.middleware';

@Module({
  imports: [UsersModule, BlogsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("blogs"); // '*'  tüm route'lara uygulanır demekmiş biz sadece blogs endpoint'inmi uygulansın dedik. 
  }
}
