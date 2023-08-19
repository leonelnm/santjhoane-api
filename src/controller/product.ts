import { NextFunction, Request, Response } from 'express'
import { ProductService } from '../services/product'
import { AppError } from '../errors/AppError'
import { Product } from '../types'

export const getAllProducts = async (_req: Request, res: Response): Promise<void> => {
  console.log('getAllProducts')

  const data = await ProductService.getAll()
  res.json(data)
}

export const findProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params
    const data = await ProductService.findById(+id)
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
