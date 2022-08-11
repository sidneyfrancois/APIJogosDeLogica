import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, escola } = request.body;
    const createUserUseCae = container.resolve(CreateUserUseCase);
    await createUserUseCae.execute({
      name,
      email,
      password,
      escola,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
