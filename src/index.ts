import { environment } from './config/environment'
import express from 'express'
import { errorHandler, errorLoggerHandler, pathNotFoundHandler } from './middlewares/errorHandler'
import { router } from './routes'

const app = express()
app.disable('x-powered-by')
app.use(express.json())

// routes
app.use('/api', router)

app.use(errorLoggerHandler)
app.use(errorHandler)
app.use(pathNotFoundHandler)

app.listen(environment.PORT, () => {
  console.log(`Server running on port ${environment.PORT}`)
})
