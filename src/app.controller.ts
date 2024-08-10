import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request, 
    @Body() Body,
    @Param() Param: { id:string; name:string },
  ): string {
    // console.log(req);
    console.log(Param);
    // return 'hello world';
    return this.appService.getHello();
  }
}
