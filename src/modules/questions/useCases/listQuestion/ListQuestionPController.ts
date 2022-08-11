import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListQuestionPUseCase } from "./ListQuestionPUseCase";

class ListQuestionPController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listQuestionPUseCase = container.resolve(ListQuestionPUseCase);
    const all = await listQuestionPUseCase.execute();
    return response.json(all);
  }
}

export { ListQuestionPController };
