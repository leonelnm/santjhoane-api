export class AppError extends Error {
  statusCode: number
  stackTrace?: string
  detail?: String

  constructor (message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}
