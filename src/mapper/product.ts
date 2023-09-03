import { Product as ProductPrisma, Prisma } from '@prisma/client'
import { Product } from '../types'

class ProductMapper {
  static toCreate(type: Product): Prisma.ProductCreateInput {
    return {
      name: type.name,
      description: type.description !== null ? type.description : undefined,
      price: type.price,
      enabled: type.enabled,
      isEspecial: type.isEspecial
    }
  }

  static toType(model: ProductPrisma): Product {
    return {
      id: model.id,
      name: model.name,
      description: model.description !== null ? model.description : undefined,
      price: model.price.toNumber(),
      enabled: model.enabled,
      isEspecial: model.isEspecial
    }
  }

  static toTypeList(list: ProductPrisma[]): Product[] {
    return list.map(ProductMapper.toType)
  }

}

export default ProductMapper
