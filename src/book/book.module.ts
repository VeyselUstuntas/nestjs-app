import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BookController],
  providers: [BookService],
  exports:[BookService],
  imports:[TypeOrmModule.forFeature([Book])]
})
export class BookModule {}
