import { getRepository, Repository } from "typeorm";
import { ICreateQuestionPDTO } from "../../dtos/ICreateQuestionPDTO";
import { IQuestionPRepository } from "../../repositories/IQuestionPRepository";
import { QuestionP } from "../typeorm/entities/QuestionP";

class QuestionPRepository implements IQuestionPRepository {
  create(data: ICreateQuestionPDTO): Promise<QuestionP> {
    throw new Error("Method not implemented.");
  }
}

export { QuestionPRepository };
