import { ProductRepository } from '../repositories/product'
import { Product } from '../types'

export class ProductService {
  static async getAll(): Promise<Product[]> {
    return await ProductRepository.findAll()
  }

  static async findById(id: number): Promise<Product | null> {
    return await ProductRepository.findById(id)
  }

  static async create(data: Product): Promise<Product> {
    return await ProductRepository.create(data)
  }
}
