import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListQuestionPUseCase } from "./ListQuestionPUseCase";

class ListQuestionPController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const listQuestionPUseCase = container.resolve(ListQuestionPUseCase);
    const questionP = await listQuestionPUseCase.execute({ id });
    return response.json(questionP);
  }
}

export { ListQuestionPController };
