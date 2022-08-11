import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { QuestionP } from "../../infra/typeorm/entities/QuestionP";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";

interface IRequest {
  titulo: string;
  enunciado: string;
}

@injectable()
class CreateQuestionPUseCase {
  constructor(
    @inject("QuestionPRepository")
    private questionPRepository: IQuestionPRepository
  ) {}

  async execute({ titulo, enunciado }: IRequest): Promise<QuestionP> {
    const questionP = await this.questionPRepository.create({
      titulo,
      enunciado,
    });

    return questionP;
  }
}

export { CreateQuestionPUseCase };
