import { Controller, Request, RawBodyRequest, Get, Delete, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Connection, Repository } from 'typeorm';

import { AuthService } from '../service/auth.service';
import { Admin } from '../../admin/model/admin.entity';

@Controller('auth')
export class AuthController {
	private adminRepository: Repository<Admin>;
	constructor(
		private authService: AuthService,
		private connection: Connection
	) {
		this.adminRepository = this.connection.getRepository(Admin);
	}
 
	@UseGuards(AuthGuard('local'))
	@Post('login')	
	async login(@Request() req) {
		console.log(req.user);
		return this.authService.login(req.user);
	}

	@UseGuards(AuthGuard('jwt'))
	@Get('profile')	
	getProfile(@Request() req) {
		return req.user;
	}

	@UseGuards(AuthGuard('jwt'))
	@Post('refresh')	
	async refresh(@Request() req) {
		const admin = await this.adminRepository.findOneBy(req.user.id);
		return this.authService.login(admin);
	}
}