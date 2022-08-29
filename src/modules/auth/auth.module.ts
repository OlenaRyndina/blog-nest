import { Module } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
import { JwtStrategy } from './service/jwt.strategy';
import { AuthController } from './controller/auth.controller';

@Module({
    imports: [
        AdminModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') }
            }),
            inject: [ConfigService]
        })
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [
        
    ]
})

export class AuthModule {}