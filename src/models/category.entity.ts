import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ProductEntity } from './product.entity'

@Entity('category')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 150, unique: true })
  name!: string

  @ManyToMany(() => ProductEntity)
  @JoinTable()
  products!: ProductEntity[]
}
