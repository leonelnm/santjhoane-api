export class AppError extends Error {
  statusCode: number
  stackTrace?: string
  detail?: any

  constructor(message: string | undefined, statusCode: number) {
    super(message ?? 'Error')
    this.statusCode = statusCode
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
