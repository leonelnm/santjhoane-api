import { DataSource } from 'typeorm'
import { env } from '../config/environment'

export const AppDataSource = new DataSource({
  ...env.DB,
  entities: ['src/models/*.entity.ts'],
  subscribers: [],
  migrations: []
})
