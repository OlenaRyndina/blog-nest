import { Module } from '@nestjs/common';
import { AdminModule } from '../admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './service/auth.service';
import { RegistrationService } from './service/registration.service';
import { LocalStrategy } from './service/local.strategy';
import { JwtStrategy } from './service/jwt.strategy';
import { AuthController } from './controller/auth.controller';
import { RegistationController } from './controller/registration.controller';

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
        AuthController,
        RegistationController
    ],
    providers: [
        AuthService,
        RegistrationService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [
        
    ]
})

export class AuthModule {}