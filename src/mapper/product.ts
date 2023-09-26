import { ProductEntity } from '../models/product.entity'
import { Product as ProductType } from '../types'

class ProductMapper {
  static toCreate(type: ProductType): any {
    return {
      name: type.name,
      description: type.description !== null ? type.description : undefined,
      price: type.price,
      enabled: type.enabled,
      isEspecial: type.isEspecial
    }
  }

  static toType(model: ProductEntity): ProductType {
    return {
      id: model.id,
      name: model.name,
      description: model.description !== null ? model.description : undefined,
      price: model.price,
      enabled: model.enabled,
      isEspecial: model.isEspecial
    }
  }

  static toTypeList(list: ProductEntity[]): ProductType[] {
    return list.map(ProductMapper.toType)
  }
}

export default ProductMapper
