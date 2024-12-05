import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';
import { Book } from './book.entity';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) {

    }

    @Post()
    @UsePipes(ValidationPipe)
    async createBook(@Body() body: CreateDto) {
        return await this.bookService.createBook(body);
    }


    @Get('')
    async getBook(): Promise<Book[]> {
        return await this.bookService.getBook();
    }


    @Delete(':id')
    async deleteBook(@Param('id') bookId:number){
        return await this.bookService.deleteBook(bookId);
    }

}
