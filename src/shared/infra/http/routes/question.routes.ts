import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController();

questionRoutes.post("/", createQuestionController.handle);

export { questionRoutes };
