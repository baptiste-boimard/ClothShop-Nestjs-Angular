// product.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('allproducts')
  getAllProducts() {
    console.log('GET /products/allproducts');
    return this.productService.getAll();
  }

  @Delete('deleteproduct:id')
  deleteOneProduct(@Param('id') id: string) {
    console.log('GET /products/deleteproduct/:id');
    return this.productService.deleteOne(parseInt(id, 10));
  }

  @Post('createproduct')
  createProduct(@Body() product: Product) {
    console.log('POST /products/createproduct');
    return this.productService.createProduct(product);
  }

  @Put('updateproduct:id')
  updateProduct(
    @Param('id') id: number,
    @Body() updatedData: Partial<Product>,
  ) {
    console.log('GET /products/deleteproduct/:id', updatedData);
    return this.productService.updateProduct(id, updatedData);
  }
}
