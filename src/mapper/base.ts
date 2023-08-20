export interface Mapper<Entity, Type, DTO> {
  dtoToType: (dto: DTO) => Type
  typeToDto: (type: Type) => DTO
  entityToType: (entity: Entity) => Type

  listDtoToListType: (dtoList: DTO[]) => Type[]
  listTypeToListDto: (typeList: Type[]) => DTO[]
  listEntityToListType: (entityList: Entity[]) => Type[]
}

export interface SimpleMapper<T, U> {
  mapTo: (t: T) => U
  mapFrom: (u: U) => T
}
