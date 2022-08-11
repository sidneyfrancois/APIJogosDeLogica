import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/repositories/UserRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IQuestionRepository } from "../../modules/questions/repositories/IQuestionsRepository";
import { QuestionRepository } from "../../modules/questions/infra/repositories/QuestionsRepository";
import { IQuestionPRepository } from "../../modules/questions/repositories/IQuestionPRepository";
import { QuestionPRepository } from "../../modules/questions/infra/repositories/QuestionPRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IQuestionRepository>(
  "QuestionRepository",
  QuestionRepository
);

container.registerSingleton<IQuestionPRepository>(
  "QuestionPRepository",
  QuestionPRepository
);
