/*
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpException, HttpStatus, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
	 handleRequest(err, user, info, context, status) {
    const request = context.switchToHttp().getRequest();
    const { login, password } = request.body;
    if (err || !user) {
      if (!login) {
        throw new HttpException({ message: 'нет логина' }, HttpStatus.OK);
      } else if (!password) {
        throw new HttpException({ message: 'нет пароля' }, HttpStatus.OK);
      } else {
        throw err || new UnauthorizedException();
      }
    }
    return user;
  }
}*/