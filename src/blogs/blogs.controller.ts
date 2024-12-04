import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateDto } from './DTO/Create.dto';

@Controller('blogs')
export class BlogsController {

    @Get('')
    getBlogs(): string {
        return "getBlogs";
    }

    @Post('')
    @UsePipes(ValidationPipe)
    postBlogs(@Body() body: CreateDto): string {
        console.log(body.title);
        console.log(body.content);
        return "postBlogs";
    }

}
