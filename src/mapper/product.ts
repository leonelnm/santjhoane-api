import { Product as ProductPrisma } from '@prisma/client'
import { Product } from '../types'
import { Mapper } from './base'

const ProductMapper: Mapper<ProductPrisma, Product> = {
  map: (product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description !== null ? product.description : undefined,
      price: product.price.toNumber(),
      enabled: product.enabled,
      isEspecial: product.isEspecial
    }
  },

  mapList(products) {
    return products.map(ProductMapper.map)
  }
}

export default ProductMapper
