import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { AdminMenuModule } from './modules/admin-menu/admin-menu.module';
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [
      TypeOrmModule.forRoot(ormconfig),
      AuthModule,
      ConfigModule.forRoot(),
      AdminMenuModule,
      CityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
