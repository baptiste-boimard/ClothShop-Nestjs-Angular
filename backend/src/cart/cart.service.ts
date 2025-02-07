import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entities/cart.entity';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,

    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAllCarts(idUser: number) {
    return await this.cartRepository.find({
      where: { idUser: idUser },
      relations: ['product'],
    });
  }

  async createCart(createCartDto: any) {
    console.log('createCartDto:', createCartDto);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.cartRepository.save(createCartDto);
  }

  // async updateCart(id: number, updateCartDto: any) {
  //   return await this.cartRepository.update(id, updateCartDto);
  // }

  // async deleteCart(id: number) {
  //   return await this.cartRepository.delete(id);
  // }

  async validateCart(
    cartItems: {
      id: number;
      idUser: number;
      idProduct: number;
      quantity: number;
    }[],
  ) {
    for (const item of cartItems) {
      await this.productRepository
        .createQueryBuilder()
        .update(Product)
        .set({ stock: () => `stock - ${item.quantity}` })
        .where('id = :id', { id: item.idProduct })
        .execute();

      await this.cartRepository.update({ id: item.id }, { isValidate: true });
    }
  }
}
