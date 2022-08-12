import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../../../modules/accounts/infra/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

export async function ensureInstructor(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isInstructor) {
    throw new AppError("User is not instructor!");
  }

  return next();
}