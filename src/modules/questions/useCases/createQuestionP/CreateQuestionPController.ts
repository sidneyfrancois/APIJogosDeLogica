import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateQuestionPUseCase } from "./CreateQuestionPUseCase";

class CreateQuestionPController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { titulo, enunciado } = request.body;

    const createQuestionPUseCase = container.resolve(CreateQuestionPUseCase);

    const questionP = await createQuestionPUseCase.execute({
      titulo,
      enunciado,
    });

    return response.status(201).json(questionP);
  }
}

export { CreateQuestionPController };
