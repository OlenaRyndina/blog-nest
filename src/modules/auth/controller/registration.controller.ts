import { Controller, Body, Post } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { RegistrationService } from '../service/registration.service';
import { Admin } from '../../admin/model/admin.entity';
import { CreateAdmin } from './admin.model';

@Controller('registration')
export class RegistationController {
	private adminRepository: Repository<Admin>;

	constructor(
		private registrationService: RegistrationService,
		private connection: Connection
	) {
		this.adminRepository = this.connection.getRepository(Admin);
	}
    
    @Post()
    async createAdmin(@Body() createAdmin: CreateAdmin): Promise<Admin> {
    	const admin = new Admin();
    	admin.nickName = createAdmin.nickName;
    	admin.login = createAdmin.login;
    	admin.passwordHash = await bcrypt.hash(createAdmin.password, 10);

    	return this.registrationService.create(admin);
    }
}

/*nickName: string;
	login: string;
	passwordHash?: string;

	passwordHash: await bcrypt.hash('secret', 10),*/