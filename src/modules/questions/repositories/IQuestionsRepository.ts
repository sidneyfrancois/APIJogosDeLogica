import { ICreateQuestionDTO } from "../dtos/ICreateQuestionDTO";
import { Question } from "../infra/typeorm/entities/Question";

interface IQuestionRepository {
  create(data: ICreateQuestionDTO): Promise<Question>;
  list(id: string): Promise<Question>;
  listAll(): Promise<Question[]>;
}

export { IQuestionRepository };
