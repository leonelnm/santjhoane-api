import 'reflect-metadata'
import { app } from './app'
import { env } from './config/environment'
import { logger } from './config/logger'
import { AppDataSource } from './db/database'

AppDataSource.initialize()
  .then(() => {
    logger.info('Data Source has been initialized!')
  })
  .catch((error) => logger.error(error))

app.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`)
})
