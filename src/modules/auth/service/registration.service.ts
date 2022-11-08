import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';

import { Admin } from '../../admin/model/admin.entity';

@Injectable()
export class RegistrationService {
	private adminRepository: Repository<Admin>;

	constructor(
        private connection: Connection
        
    ) {
		this.adminRepository = this.connection.getRepository(Admin);
    } 

	create(admin: Admin): Promise<Admin> {
		delete admin.id;
		return this.adminRepository.save(admin);
	}

}