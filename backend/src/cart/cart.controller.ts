import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  // Delete,
  // Put,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('allcarts:idUser')
  getAllCarts(@Param('idUser') idUser: number) {
    const coucou = this.cartService.getAllCarts(idUser);
    return coucou;
  }

  @Post('createcart')
  createCart(@Body() createCartDto: any) {
    return this.cartService.createCart(createCartDto);
  }

  @Post('validatecart')
  validateCart(
    @Body()
    body: { id: number; idUser: number; idProduct: number; quantity: number }[],
  ) {
    return this.cartService.validateCart(body);
  }
}
