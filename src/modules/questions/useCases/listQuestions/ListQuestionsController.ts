import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListQuestionsUseCase } from "./ListQuestionsUseCase";

class ListQuestionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const listQuestionsUseCase = container.resolve(ListQuestionsUseCase);
    const question = await listQuestionsUseCase.execute({ id });
    return response.json(question);
  }
}

export { ListQuestionsController };
