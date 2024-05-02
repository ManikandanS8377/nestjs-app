import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CRUDModule } from './CRUD/crud.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('Host'),
        port: +configService.get('Port'),
        username: configService.get('User_name'),
        password: configService.get('DB_password'),
        database: configService.get('DB_name'),
        //entities: [CRUD],
        entities: [join(process.cwd(),'dist/**/*.entity.js')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CRUDModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
