import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { IngredientEntity } from './ingredient.entity'
import { PhotoEntity } from './photo.entity'

@Entity('product')
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ length: 150, unique: true })
  name!: string

  @Column({ length: 500 })
  description!: string

  @Column('double')
  price!: number

  @Column({ default: true })
  enabled!: boolean

  @Column({ default: false })
  isEspecial!: boolean

  @ManyToMany(() => IngredientEntity, (ingredient) => ingredient.products)
  @JoinTable()
  ingredients!: IngredientEntity[]

  @OneToOne(() => PhotoEntity)
  @JoinTable()
  photo!: PhotoEntity
}
