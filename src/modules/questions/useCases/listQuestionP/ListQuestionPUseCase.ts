import { inject, injectable } from "tsyringe";
import { QuestionP } from "../../infra/typeorm/entities/QuestionP";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListQuestionPUseCase {
  constructor(
    @inject("QuestionPRepository")
    private questionPRepository: IQuestionPRepository
  ) {}

  async execute({ id }: IRequest): Promise<QuestionP> {
    const questionP = await this.questionPRepository.list(id);

    return questionP;
  }
}

export { ListQuestionPUseCase };
