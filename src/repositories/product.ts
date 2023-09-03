import { prisma } from '../db/prisma/client'
import ProductMapper from '../mapper/product'
import { Product } from '../types'

export class ProductRepository {
  static async findAll(): Promise<Product[]> {
    const list = await prisma.product.findMany()
    return ProductMapper.toTypeList(list)
  }

  static async findById(id: number): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id }
    })

    return product === null ? null : ProductMapper.toType(product)
  }

  static async create(data: Product): Promise<Product> {
    const newProduct = ProductMapper.toCreate(data);
    return ProductMapper.toType(await prisma.product.create({
      data: newProduct
    }))
  }

  static async update(id: number, data: Partial<Product>): Promise<Product> {
    const product = await prisma.product.update({
      where: { id },
      data
    })
    return ProductMapper.toType(product)
  }
}
