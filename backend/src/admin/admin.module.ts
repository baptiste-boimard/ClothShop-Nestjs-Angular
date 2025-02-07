import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service'; // s'il existe
import { RolesGuard } from '../guards/roles.guard';

@Module({
  imports: [
    // Importez le JwtModule afin que JwtService soit disponible.
    // Vous pouvez utiliser une configuration minimale ou importer la configuration globale.
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'votre_secret', // ou utilisez la configuration adaptée
      signOptions: { expiresIn: '60s' },
    }),
    // Autres modules dont vous avez besoin
  ],
  controllers: [AdminController],
  providers: [AdminService, RolesGuard],
})
export class AdminModule {}
