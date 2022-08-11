import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
}

export { IQuestionRepository };
