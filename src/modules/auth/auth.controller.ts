/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Res, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('api')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	// Đăng ký
	@Post('register')
	async registerAuth(@Body() authDto: authDto, @Res() res: Response) {
		try {
			const register = await this.authService.registerAuth(authDto);
			return res.status(HttpStatus.OK).json({ message: 'Đăng ký thành công!' });
		} catch (error) {
			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
