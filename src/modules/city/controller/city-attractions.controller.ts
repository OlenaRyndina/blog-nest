import { Controller, Request, RawBodyRequest, Get, Delete, Post, Body, Param } from '@nestjs/common';
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

	@Delete(':id')
	deleteCityAttr(@Param('id') id: string): Promise<void> {
		return this.cityAttractionsService.removeAttr(id);
	}
}
