import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  // Delete,
  // Put,
} from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('allcarts:idUser')
  getAllCarts(@Param('idUser') idUser: number) {
    console.log('GET /cart/allcarts', idUser);
    if (!idUser) {
      console.log('GET /cart/allcarts', 'idUser is not defined');
    }
    const coucou = this.cartService.getAllCarts(idUser);
    console.log('GET /cart/allcarts', coucou);
    return coucou;
  }

  @Post('createcart')
  createCart(@Body() createCartDto: any) {
    console.log('POST /cart/createcart', createCartDto);
    return this.cartService.createCart(createCartDto);
  }

  // @Put('updatecart:id')
  // updateCart(@Param('id') id: string, @Body() updateCartDto: any) {
  //   return this.cartService.updateCart(+id, updateCartDto);
  // }

  // @Delete('delete:id')
  // deleteCart(@Param('id') id: string) {
  //   return this.cartService.deleteCart(+id);
  // }

  @Post('validatecart')
  validateCart(
    @Body()
    body: { id: number; idUser: number; idProduct: number; quantity: number }[],
  ) {
    console.log('POST /cart/validatecart', body);
    return this.cartService.validateCart(body);
  }
}
