import { getRepository, Repository } from "typeorm";
import { ICreateQuestionDTO } from "../../dtos/ICreateQuestionDTO";
import { IQuestionRepository } from "../../repositories/IQuestionsRepository";
import { Question } from "../typeorm/entities/Question";

class QuestionRepository implements IQuestionRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({
    enunciado,
    alternativas,
    resposta,
    questionP_id,
  }): Promise<Question> {
    const question = this.repository.create({
      enunciado,
      alternativas,
      resposta,
      questionP_id,
    });

    await this.repository.save(question);

    return question;
  }
}

export { QuestionRepository };
