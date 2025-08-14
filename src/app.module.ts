import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from './config/ormconfig';
import { QuestionsModule } from './questions/questions.module';
import { TestModule } from './test/test.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getOrmConfig,
    }),
    QuestionsModule,
    TestModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
