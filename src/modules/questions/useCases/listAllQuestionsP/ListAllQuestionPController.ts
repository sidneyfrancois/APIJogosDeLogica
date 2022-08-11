import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllQuestionPUseCase } from "./ListAllQuestionPUseCase";

class ListAllQuestionPController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllQuestionPUseCase = container.resolve(ListAllQuestionPUseCase);
    const questionsP = await listAllQuestionPUseCase.execute();
    return response.json(questionsP);
  }
}

export { ListAllQuestionPController };
