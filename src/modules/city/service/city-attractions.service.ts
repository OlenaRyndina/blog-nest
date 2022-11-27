import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { CityAttractions } from '../../city/model/city-attractions.entity';


@Injectable()
export class CityAttractionsService {
	private cityAttractionsRepository: Repository<CityAttractions>;

	constructor(
        private connection: Connection
        
    ) {
		this.cityAttractionsRepository = this.connection.getRepository(CityAttractions);
    } 

	createAttr(cityAttractions: CityAttractions): Promise<CityAttractions> {
		delete cityAttractions.id;
		return this.cityAttractionsRepository.save(cityAttractions);
	}

	getAllCitiesAttr(): Promise<CityAttractions[]> {
        return this.cityAttractionsRepository.find();
	}

	async removeAttr(id: string): Promise<void> {
    await this.cityAttractionsRepository.delete(id);
  }

}