import { getRepository, Repository } from "typeorm";
import { ICreateQuestionPDTO } from "../../dtos/ICreateQuestionPDTO";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";
import { QuestionP } from "../typeorm/entities/QuestionP";

class QuestionPRepository implements IQuestionPRepository {
  private repository: Repository<QuestionP>;

  constructor() {
    this.repository = getRepository(QuestionP);
  }

  async create({ titulo, enunciado }): Promise<QuestionP> {
    const questionP = this.repository.create({
      titulo,
      enunciado,
    });

    await this.repository.save(questionP);

    return questionP;
  }
}

export { QuestionPRepository };
