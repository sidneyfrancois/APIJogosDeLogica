import { inject, injectable } from "tsyringe";
import { QuestionP } from "../../infra/typeorm/entities/QuestionP";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";

@injectable()
class ListAllQuestionPUseCase {
  constructor(
    @inject("QuestionPRepository")
    private questionPRepository: IQuestionPRepository
  ) {}

  async execute(): Promise<QuestionP[]> {
    const questionsP = await this.questionPRepository.listAll();
    return questionsP;
  }
}

export { ListAllQuestionPUseCase };
