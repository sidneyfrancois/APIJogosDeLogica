import { ICreateQuestionPDTO } from "../dtos/ICreateQuestionPDTO";
import { QuestionP } from "../infra/typeorm/entities/QuestionP";

interface IQuestionPRepository {
  create(data: ICreateQuestionPDTO): Promise<QuestionP>;
}

export { IQuestionPRepository };
