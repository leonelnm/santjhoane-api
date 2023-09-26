
import { Repository } from 'typeorm'
import { AppDataSource } from '../db/database'
import ProductMapper from '../mapper/product'
import { ProductEntity } from '../models/product.entity'
import { Product as ProductType } from '../types'

export class ProductRepository {
  private readonly repository: Repository<ProductEntity>

  constructor() {
    this.repository = AppDataSource.getRepository(ProductEntity)
  }

  async findAll(): Promise<ProductType[]> {
    const list = await this.repository.find()
    return ProductMapper.toTypeList(list)
  }

  async findById(id: string): Promise<ProductType | null> {
    const product = await this.repository.findOne({
      where: { id }
    })

    return product === null ? null : ProductMapper.toType(product)
  }

  async create(data: ProductType): Promise<ProductType> {
    const newProduct = ProductMapper.toCreate(data)
    return ProductMapper.toType(
      await this.repository.save(newProduct)
    )
  }

  async update(_id: number, data: Partial<ProductType>): Promise<ProductType> {
    const product = await this.repository.save(data)
    return ProductMapper.toType(product)
  }

  async findByName(name: string): Promise<ProductType | null> {
    const product = await this.repository.findOne({
      where: { name }
    })

    return product === null ? null : ProductMapper.toType(product)
  }
}
