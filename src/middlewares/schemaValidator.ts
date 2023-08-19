import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { ValidationError } from '../errors/ValidationError'

export const schemaValidator = (schema: AnyZodObject) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    try {
      const res = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      })
      req.body = res.body
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ValidationError(getDetailsFromZodError(error)))
      }
      next(error)
    }
  }

const getDetailsFromZodError = (error: ZodError): any => {
  return error.issues.map((issue) => {
    return {
      message: issue.message,
      path: issue.path
    }
  })
}
