import { Injectable } from '@nestjs/common';
import { CreateDto } from './DTO/Create.dto';

@Injectable()
export class BlogsService {
    private blogList: CreateDto[] = [];
    
    
    createBlogs(data: CreateDto) {
        this.blogList.push(data);
        console.log("Blog oluşturma işlemi başladı");
    }

    blogs() : CreateDto[]{
        return this.blogList;
    }
}
