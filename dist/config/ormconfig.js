"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrmConfig = void 0;
const getOrmConfig = async (configService) => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    autoLoadEntities: true,
    synchronize: false,
    logging: false,
});
exports.getOrmConfig = getOrmConfig;
//# sourceMappingURL=ormconfig.js.map