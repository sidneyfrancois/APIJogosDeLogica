import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Question } from "../infra/typeorm/entities/Question";
import { IQuestionRepository } from "../repositories/IQuestionsRepository";

interface IRequest {
  enunciado: string;
  alternativas: string[];
  resposta: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject("QuestionRepository")
    private questionRepository: IQuestionRepository
  ) {}

  async execute({
    enunciado,
    alternativas,
    resposta,
  }: IRequest): Promise<Question> {
    const question = await this.questionRepository.create({
      enunciado,
      alternativas,
      resposta,
    });

    return question;
  }
}

export { CreateQuestionUseCase };
