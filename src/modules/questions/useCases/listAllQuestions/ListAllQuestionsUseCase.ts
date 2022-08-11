import { inject, injectable } from "tsyringe";
import { Question } from "../../infra/typeorm/entities/Question";
import { IQuestionRepository } from "../../repositories/IQuestionsRepository";

@injectable()
class ListAllQuestionsUseCase {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}

  async execute(): Promise<Question[]> {
    const questions = await this.questionRepository.listAll();
    return questions;
  }
}

export { ListAllQuestionsUseCase };
