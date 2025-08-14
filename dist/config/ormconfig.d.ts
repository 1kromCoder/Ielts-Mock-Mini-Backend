import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export declare const getOrmConfig: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
