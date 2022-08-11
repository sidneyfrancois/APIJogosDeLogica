export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  // valor default: 400
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
