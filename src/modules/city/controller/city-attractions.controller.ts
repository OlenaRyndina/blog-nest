import { Controller, Request, RawBodyRequest, Get, Delete, Post, Put, Body, Param, NotFoundException } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { CityAttractionsService } from '../service/city-attractions.service';
import { CityAttractions } from '../../city/model/city-attractions.entity';
import { CreateAttr } from './city-attr.model';

@Controller('city-attr')
export class CityAttractionsController {
	private cityAttractionsRepository: Repository<CityAttractions>;
	constructor(
		private cityAttractionsService: CityAttractionsService,
		private connection: Connection
	) {
		this.cityAttractionsRepository = this.connection.getRepository(CityAttractions);
	}
 
	@Post()	
	async postCityAttr(@Body() createAttr: CreateAttr): Promise<CityAttractions> {
		const cityAttr = new CityAttractions();

		cityAttr.cityName = createAttr.cityName;
	    cityAttr.cityAttractions = createAttr.cityAttractions;
	    cityAttr.nameCityAttractions = createAttr.nameCityAttractions;
	    cityAttr.adress = createAttr.adress;
	    cityAttr.phone = createAttr.phone;
	    cityAttr.site = createAttr.site;
	    cityAttr.workHours = createAttr.workHours;
	    cityAttr.ticketPrice = createAttr.ticketPrice;
	    cityAttr.coordX = createAttr.coordX;
	    cityAttr.coordY = createAttr.coordY;
	    cityAttr.like = createAttr.like;

	    return this.cityAttractionsService.createAttr(cityAttr);
	}

	@Get()	
	getAllCitiesAttr(): Promise<CityAttractions[]> {
		return this.cityAttractionsService.getAllCitiesAttr();
	}

	@Put(':id')
    async updateAction(
        @Param('id') id: string, 
        @Body() {
        	cityName,
	        cityAttractions,
	        nameCityAttractions,
	        adress,
	        phone,
	        site,
	        workHours,
	        ticketPrice,
	        coordX,
	        coordY,
	        like
	    }: CreateAttr
    ): Promise<CreateAttr> {
        const cityAttr = await this.cityAttractionsService.findOne(id);
        if (cityAttr === undefined) {
            throw new NotFoundException('cityAttr # ' + id + ' does not exist');
        }
        cityAttr.cityName = cityName;
        cityAttr.cityAttractions = cityAttractions;
        cityAttr.nameCityAttractions = nameCityAttractions;
        cityAttr.adress = adress;
        cityAttr.phone = phone;
        cityAttr.site = site;
        cityAttr.workHours = workHours;
        cityAttr.ticketPrice = ticketPrice;
        cityAttr.coordX = coordX;
        cityAttr.coordY = coordY;
        cityAttr.like = like;
        return this.cityAttractionsService.update(cityAttr);
    }

	@Delete(':id')
	deleteCityAttr(@Param('id') id: string): Promise<void> {
		return this.cityAttractionsService.removeAttr(id);
	}
}
