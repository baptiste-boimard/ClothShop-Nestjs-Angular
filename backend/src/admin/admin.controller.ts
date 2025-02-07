import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  @Get('getAdminData')
  getAdminData() {
    return { message: 'Bienvenue Admin !' };
  }
}
