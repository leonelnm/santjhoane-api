import { AppError } from './AppError'

const VALIDATION_ERROR_MESSAGE = 'Validation errors were found in the request.'

export class ValidationError extends AppError {
  constructor(detail: {}, statusCode = 400) {
    super(VALIDATION_ERROR_MESSAGE, statusCode)
    this.name = 'VALIDATION_ERROR'
    this.detail = detail
  }
}
