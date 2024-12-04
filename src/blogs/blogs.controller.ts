import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDto } from './dto/Create.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {

    constructor(private readonly blogService: BlogsService) {

    }

    @Get('')
    getBlogs(): CreateDto[] {
        console.log("blog controller çalıştı");
        return this.blogService.blogs();
    }

    @Post('')
    @UsePipes(ValidationPipe)
    createBlog(@Body() body: CreateDto): string {
        this.blogService.createBlogs(body);
        return "Success";
    }

}
