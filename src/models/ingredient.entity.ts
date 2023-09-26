import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProductEntity } from './product.entity'

@Entity('ingredient')
export class IngredientEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 150, unique: true })
  name!: string

  @Column({ length: 150 })
  descripcionEs!: string

  @Column({ length: 150 })
  descripcionEn!: string

  @ManyToMany(() => ProductEntity, (product) => product.ingredients)
  products!: ProductEntity[]
}
