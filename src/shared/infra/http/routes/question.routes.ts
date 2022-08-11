import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";
import { CreateQuestionPController } from "../../../../modules/questions/useCases/createQuestionP/CreateQuestionPController";
import { ListQuestionPController } from "../../../../modules/questions/useCases/listQuestionP/ListQuestionPController";
import { ListQuestionsController } from "../../../../modules/questions/useCases/listQuestions/ListQuestionsController";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionPController = new CreateQuestionPController();
const listQuestionPController = new ListQuestionPController();
const listQuestionsController = new ListQuestionsController();

questionRoutes.post("/question", createQuestionController.handle);
questionRoutes.post("/questionP", createQuestionPController.handle);
questionRoutes.get("/questionP", listQuestionPController.handle);
questionRoutes.get("/question", listQuestionsController.handle);

export { questionRoutes };
