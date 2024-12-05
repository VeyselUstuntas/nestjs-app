import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthMiddleware } from './middleware/Auth.middleware';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/book.entity';

@Module({
  imports: [
    UsersModule,
    BlogsModule,
    BookModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bookmanager',
      entities: [Book],
      synchronize: true,
    }),

  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("blogs"); // '*'  tüm route'lara uygulanır demekmiş biz sadece blogs endpoint'inmi uygulansın dedik. 
  }
}
