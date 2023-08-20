import { NextFunction, Request, Response } from 'express'
import { ProductService } from '../services/product'
import { AppError } from '../errors/AppError'
import { Product } from '../types'
import { UpdateProductBodyType, UpdateProductParamsType } from '../validators/product'
import { NotFoundError } from '../errors/NotFoundError'

export const getAllProducts = async (_req: Request, res: Response): Promise<void> => {
  const data = await ProductService.getAll()
  res.json(data)
}

export const findProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const data = await ProductService.findById(+id)
    if (data === null) throw new NotFoundError(`Product ${id} not found`)
    res.json(data)
  } catch (error) {
    next(error)
  }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data: Product = req.body
    const product = await ProductService.create(data)
    if (product === null) throw new AppError('Product not created', 400)
    res.json(product)
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req: Request<UpdateProductParamsType, unknown, UpdateProductBodyType>, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log(req.params.id)
    console.log(req.body)

    res.json({ message: 'updateProduct' })
  } catch (error) {
    next(error)
  }
}
