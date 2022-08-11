import { getRepository, Repository } from "typeorm";
import { ICreateQuestionDTO } from "../../dtos/ICreateQuestionDTO";
import { IQuestionRepository } from "../../repositories/IQuestionsRepository";
import { Question } from "../typeorm/entities/Question";

class QuestionRepository implements IQuestionRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({ enunciado, alternativas, resposta }): Promise<Question> {
    const question = this.repository.create({
      enunciado,
      alternativas,
      resposta,
    });

    await this.repository.save(question);

    return question;
  }
}
