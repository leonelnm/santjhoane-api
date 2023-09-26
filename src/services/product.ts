import { AppError } from '../errors/AppError'
import { ProductRepository } from '../repositories/product'
import { Product } from '../types'

export class ProductService {
  repository: ProductRepository
  constructor() {
    this.repository = new ProductRepository()
  }

  async getAll(): Promise<Product[]> {
    return await this.repository.findAll()
  }

  async findById(id: string): Promise<Product | null> {
    return await this.repository.findById(id)
  }

  async create(data: Product): Promise<Product> {
    if (await this.repository.findByName(data.name) !== null) {
      throw new AppError('Product name already exists', 400)
    }

    return await this.repository.create(data)
  }
}
