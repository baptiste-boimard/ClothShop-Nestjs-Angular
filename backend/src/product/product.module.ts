import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'votre_clé_secrète',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService, JwtAuthGuard],
})
export class ProductModule {}
