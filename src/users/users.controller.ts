import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('')
    getUsers(): string {
        return "getUsers çağırıldı";
    }

    @Post('')
    postUsers(): string{
        return "Post Users çağırıldı";
    }
}
