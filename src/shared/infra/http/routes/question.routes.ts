import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";
import { CreateQuestionPController } from "../../../../modules/questions/useCases/createQuestionP/CreateQuestionPController";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionPController = new CreateQuestionPController();

questionRoutes.post("/question", createQuestionController.handle);
questionRoutes.post("/questionP", createQuestionPController.handle);

export { questionRoutes };
