/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() dto: AuthDto) {
        return await this.authService.signup(dto);
    }

    @Post('signin')
    async signin(@Body() dto: AuthDto) {
        return await this.authService.signin(dto);
    }
}