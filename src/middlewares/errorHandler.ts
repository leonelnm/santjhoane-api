import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors/AppError'

export const errorLoggerHandler = (error: Error, _req: Request, _res: Response, next: NextFunction): void => {
  console.log('[errorLoggerHandler]:', error)
  next(error)
}

export function errorHandler(error: Error, _req: Request, res: Response, _next: NextFunction): void {
  const errorResponse = {
    error: {
      message: error instanceof AppError ? error.message : 'Internal server error',
      code: error instanceof AppError ? error.name : 'Internal Server Error',
      status: error instanceof AppError ? error.statusCode : 500,
      detail: error instanceof AppError && error.detail,
      stack: error instanceof AppError ? undefined : error.stack,
      timestamp: new Date().toISOString()
    }
  }

  res.status(errorResponse.error.status).json(errorResponse).end()
}

export const pathNotFoundHandler = (req: Request, res: Response, _next: NextFunction): void => {
  console.log(`Invalid path: [${req.method}] ${req.path} | original request: ${req.originalUrl}`)
  // TODO añadir gestión de logs

  const errorResponse = {
    error: {
      message: `Resource not found at path: ${req.path}`,
      code: 'Path Not Found',
      status: 404,
      timestamp: new Date().toISOString()
    }
  }

  res.status(errorResponse.error.status).json(errorResponse).end()
}
