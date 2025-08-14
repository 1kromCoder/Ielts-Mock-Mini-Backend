import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { Question } from '../questions/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
