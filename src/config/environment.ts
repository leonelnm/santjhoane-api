import dotenv from 'dotenv'

const environment = process.env.NODE_ENV ?? 'development'

let envFileName = `.env.${environment}`
if (environment === 'production') {
  envFileName = '.env'
}

dotenv.config({ path: envFileName })

const getDatabaseConfig = (): any => {
  return {
    type: 'mariadb',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 3306),
    username: process.env.DB_USER ?? 'test',
    password: process.env.DB_PASSWORD ?? 'test',
    database: process.env.DB_NAME ?? 'test',
    synchronize: true,
    logging: process.env.DB_LOGGING === 'true'
  }
}

export const env = {
  ENVIRONMENT: environment,
  PORT: process.env.PORT ?? 1234,
  LOG_LEVEL: process.env.LOG_LEVEL ?? 'info',
  DB: getDatabaseConfig()
}
