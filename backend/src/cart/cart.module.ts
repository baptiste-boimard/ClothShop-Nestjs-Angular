import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Product } from 'src/entities/product.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, Product]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'votre_clé_secrète',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [CartController],
  providers: [CartService, JwtAuthGuard],
  exports: [CartService],
})
export class CartModule {}
