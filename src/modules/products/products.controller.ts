import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './types/dtos';
import { DeleteProductQuery } from './types/dtos/delete-product';
import { FindProductQuery } from './types/dtos/find-all-products';

@ApiTags('Produtos')
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }
    @Post('create')
    async create(@Body() createProductResponse: CreateProductDTO) {
        return await this.productService.create(createProductResponse)
    }
    @Get()
    async findAll(@Query() findAllProductQuery: FindProductQuery) {
        return await this.productService.findAll(findAllProductQuery)
    }
    @Delete()
    async delete(@Query() deleteProductQuery: DeleteProductQuery) {
        return await this.productService.delete(deleteProductQuery)
    }
}
