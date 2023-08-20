import { Product as ProductPrisma } from '@prisma/client'
import { Product } from '../types'
import { Mapper } from './base'
import { ProductType } from '../validators/product'

const ProductMapper: Mapper<ProductPrisma, Product, ProductType> = {
  dtoToType: (dto) => {
    return {
      name: dto.name,
      description: dto.description,
      price: dto.price,
      enabled: dto.enabled,
      isEspecial: dto.isEspecial
    }
  },
  typeToDto: (type) => {
    return {
      id: type.id,
      name: type.name,
      description: type.description,
      price: type.price,
      enabled: type.enabled,
      isEspecial: type.isEspecial
    }
  },
  entityToType: (entity) => {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description !== null ? entity.description : undefined,
      price: entity.price.toNumber(),
      enabled: entity.enabled,
      isEspecial: entity.isEspecial
    }
  },
  listEntityToListType: (entityList) => entityList.map(ProductMapper.entityToType),
  listDtoToListType: (dtoList) => dtoList.map(ProductMapper.dtoToType),
  listTypeToListDto: (typeList) => typeList.map(ProductMapper.typeToDto)
}

export default ProductMapper
