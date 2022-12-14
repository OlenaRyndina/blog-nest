import { Controller, Body, Post, Get, Request } from '@nestjs/common';
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
    	console.log(admin);

    	return this.registrationService.create(admin);
    }

    @Get('login')	
	checkLogin(@Request() req) {
		console.log(req.query.login);
		return this.registrationService.validateLogin(req.query.login);
	}
}
