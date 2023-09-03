import express from 'express'
import * as productController from '../controller/product'
import { schemaValidator } from '../middlewares/schemaValidator'
import { getProductSchema, productSchema, updateProductSchema } from '../validators/product'

export const productRouter = express.Router()

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', schemaValidator(getProductSchema), productController.findProductById)
productRouter.post('/', schemaValidator(productSchema), productController.createProduct)
productRouter.put('/:id', schemaValidator(updateProductSchema), productController.updateProduct)
