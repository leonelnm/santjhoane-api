import express from 'express'
import { errorHandler, errorLoggerHandler, pathNotFoundHandler } from './middlewares/errorHandler'
import { router } from './routes'

export const app = express()
app.disable('x-powered-by')
app.use(express.json())

// routes
app.use('/api', router)

app.use(errorLoggerHandler)
app.use(errorHandler)
app.use(pathNotFoundHandler)
