import { inject, injectable } from "tsyringe";
import { Question } from "../../infra/typeorm/entities/Question";
import { IQuestionRepository } from "../../repositories/IQuestionsRepository";

interface IRequest {
  id: string;
}

@injectable()
class ListQuestionsUseCase {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}

  async execute({ id }: IRequest): Promise<Question> {
    const question = await this.questionRepository.list(id);
    return question;
  }
}

export { ListQuestionsUseCase };
