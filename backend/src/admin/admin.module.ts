import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service'; // s'il existe
import { RolesGuard } from '../guards/roles.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'votre_secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService, RolesGuard, JwtAuthGuard],
})
export class AdminModule {}
