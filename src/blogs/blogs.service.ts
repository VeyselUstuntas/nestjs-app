import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';

@Injectable()
export class BlogsService {
    private blogList: CreateDto[] = [];
    
    
    createBlogs(data: CreateDto) {
        this.blogList.push(data);
        console.log("Blog oluşturma işlemi başladı");
    }

    blogs() : CreateDto[]{
        console.log("blog servis çalıştı");
        return this.blogList;
    }
}
