import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { CreateProductDTO } from './types/dtos';
import { DeleteProductQuery } from './types/dtos/delete-product';
import { FindProductQuery } from './types/dtos/find-all-products';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }
    async create(createProductResponse: CreateProductDTO) {
        const { brand, image, name, price, unitType } = createProductResponse
        try {
            const product = this.productRepository.create({ brand, image, name, price, unitType })
            await this.productRepository.save(product)
            return { product, success: true }
        } catch (error) {
            return { product: null, success: false }
        }
    }
    async findAll(findAllProductQuery: FindProductQuery) {
        try {
            const product = await this.productRepository.findBy(findAllProductQuery)

            return { product, success: true }
        } catch (error) {
            return { product: null, success: false }
        }
    }
    async delete(deleteProductQuery: DeleteProductQuery) {
        try { 
            await this.productRepository.delete({ id: deleteProductQuery.uuid })
            return { success: true }
        } catch (error) {
            return { success: false }
        }
    }
}
