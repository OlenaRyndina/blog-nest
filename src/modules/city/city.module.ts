import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CityAttractions } from './model/city-attractions.entity';
import { CityAttractionsService } from './service/city-attractions.service';
import { CityAttractionsController } from './controller/city-attractions.controller';


@Module({
    imports: [TypeOrmModule.forFeature([CityAttractions])],
    controllers: [
        CityAttractionsController
    ],
    providers: [
        CityAttractionsService
    ]
})
export class CityModule {}
