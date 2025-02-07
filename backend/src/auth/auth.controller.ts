import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    console.log('register controller', body);
    const result = this.authService.register(body.email, body.password);
    return result;
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    console.log('login controller', body);
    const result = this.authService.login(body.email, body.password);
    return result;
  }
}
