import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {

    // bu db işlemlerini kullanabilmek için gerekli sanırım 
    constructor(@InjectRepository(Book) private readonly bookRepo: Repository<Book>) {

    }

    async createBook(body: CreateDto) {
        const data = this.bookRepo.create(body);
        return await this.bookRepo.save(data);

    }

    async getBook():Promise<Book[]>{
        return await this.bookRepo.find();
    }

    async deleteBook(bookId:number){
        return await this.bookRepo.delete(bookId);
    }
}
