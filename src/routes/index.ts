import { Router } from 'express'
import { productRouter } from './products'

export const router = Router()

router.use('/products', productRouter)
