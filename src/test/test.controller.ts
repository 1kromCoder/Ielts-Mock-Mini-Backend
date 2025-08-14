import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TestService } from './test.service';

@ApiTags('Test')
@Controller('test')
export class TestController {
  constructor(private readonly service: TestService) {}

  @Get('questions')
  getQuestions(@Query('limit') limit = 20) {
    return this.service.getRandomQuestions(Number(limit));
  }

  @Post('submit')
  submit(@Body() payload: { answers: { questionId: number; selectedIndex: number }[] }) {
    return this.service.calculateResult(payload?.answers ?? []);
  }
}
