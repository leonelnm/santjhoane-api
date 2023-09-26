import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from './base.entity'

@Entity('photo')
export class PhotoEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  name!: string

  @Column({ length: 500 })
  url_100!: string

  @Column({ length: 500 })
  url_200!: string

  @Column({ length: 500 })
  url_full!: string
}
