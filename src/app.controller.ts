import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import path from 'path';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData(): string {
    return "get işlemi";
  }


  @Post('login')
  post(@Body() param: any): string {
    return param;
  }

  @Post()
  post2(): string {
    return "post işlemi"
  }

  @Patch()
  pathc(): string {
    return "patch geldi";
  }

  @Delete(':id')
  delete(@Param() params:any){
    return "deleted "+params.id;
  }

  @Delete(':id')
  delete2(@Param('id') id: number) {
    return "deleted id: " + id;
  }

  @Get()
  aramaSonucu(@Query() query: any, @Res() res: Response): any {
    res.status(HttpStatus.REQUEST_TIMEOUT).json({ message: "bilmem ne patladı" }).send();
  }


}
