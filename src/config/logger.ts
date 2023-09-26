import winston from 'winston'
import { env } from './environment'

const generateTransports = (): winston.transport[] => {
  if (env.ENVIRONMENT === 'production') {
    return [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  }

  return [new winston.transports.Console()]
}
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`
})

export const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  // format: winston.format.json(),
  format: winston.format.combine(
    winston.format.timestamp(),
    myFormat
  ),
  transports: generateTransports()
})
