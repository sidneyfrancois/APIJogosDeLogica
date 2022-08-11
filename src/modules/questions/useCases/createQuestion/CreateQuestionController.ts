import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { enunciado, alternativas, resposta, questionP_id } = request.body;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    const question = await createQuestionUseCase.execute({
      enunciado,
      alternativas,
      resposta,
      questionP_id,
    });

    return response.status(201).json(question);
  }
}

export { CreateQuestionController };
