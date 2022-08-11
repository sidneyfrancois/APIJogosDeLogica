import { getRepository, Repository } from "typeorm";
import { ICreateQuestionPDTO } from "../../dtos/ICreateQuestionPDTO";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";
import { Question } from "../typeorm/entities/Question";
import { QuestionP } from "../typeorm/entities/QuestionP";

class QuestionPRepository implements IQuestionPRepository {
  private repository: Repository<QuestionP>;
  private repositoryQuestion: Repository<Question>;

  constructor() {
    this.repository = getRepository(QuestionP);
    this.repositoryQuestion = getRepository(Question);
  }

  async create({ titulo, enunciado }): Promise<QuestionP> {
    const questionP = this.repository.create({
      titulo,
      enunciado,
    });

    await this.repository.save(questionP);

    return questionP;
  }

  async list(id: string): Promise<QuestionP> {
    const questionP = await this.repository.findOne({ id });

    const questionsQuery = await this.repositoryQuestion
      .createQueryBuilder("c")
      .where("c.questionP_id = :questionP_id", { questionP_id: id });

    const questionsRelated = await questionsQuery.getMany();

    questionP.questoes = questionsRelated;

    return questionP;
  }

  async listAll(): Promise<QuestionP[]> {
    const questionsP = await this.repository.find();

    for (let questionP of questionsP) {
      let questionsQuery = await this.repositoryQuestion
        .createQueryBuilder("c")
        .where("c.questionP_id = :questionP_id", {
          questionP_id: questionP.id,
        });
      let questionsRelated = await questionsQuery.getMany();
      questionP.questoes = questionsRelated;
    }

    return questionsP;
  }
}

export { QuestionPRepository };
