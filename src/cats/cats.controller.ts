import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
// import { PositiveIntPipe } from 'src/common/pipes/positiveIntPipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.Interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp(@Body() body) {
    console.log(body);
    return 'signup';
  }

  @Post()
  logIn() {
    return 'login';
  }

  @Post()
  logOut() {
    return 'logout';
  }

  @Post()
  uploadCatImg() {
    return 'uploadImg';
  }
}
