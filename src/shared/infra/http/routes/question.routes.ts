import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";
import { CreateQuestionPController } from "../../../../modules/questions/useCases/createQuestionP/CreateQuestionPController";
import { ListQuestionPController } from "../../../../modules/questions/useCases/listQuestion/ListQuestionPController";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionPController = new CreateQuestionPController();
const listQuestionPController = new ListQuestionPController();

questionRoutes.post("/question", createQuestionController.handle);
questionRoutes.post("/questionP", createQuestionPController.handle);
questionRoutes.get("/questionP", listQuestionPController.handle);

export { questionRoutes };
