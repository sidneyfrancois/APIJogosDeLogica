import { Router } from "express";
import { CreateQuestionController } from "../../../../modules/questions/useCases/createQuestion/CreateQuestionController";
import { CreateQuestionPController } from "../../../../modules/questions/useCases/createQuestionP/CreateQuestionPController";
import { ListAllQuestionsController } from "../../../../modules/questions/useCases/listAllQuestions/ListAllQuestionsController";
import { ListAllQuestionPController } from "../../../../modules/questions/useCases/listAllQuestionsP/ListAllQuestionPController";
import { ListQuestionPController } from "../../../../modules/questions/useCases/listQuestionP/ListQuestionPController";
import { ListQuestionsController } from "../../../../modules/questions/useCases/listQuestions/ListQuestionsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureInstructor } from "../middlewares/ensureInstructor";

const questionRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionPController = new CreateQuestionPController();
const listQuestionPController = new ListQuestionPController();
const listQuestionsController = new ListQuestionsController();
const listAllQuestionsController = new ListAllQuestionsController();
const listAllQuestionsPController = new ListAllQuestionPController();

questionRoutes.post("/question", ensureAuthenticated, ensureInstructor, createQuestionController.handle);
questionRoutes.post("/questionP", ensureAuthenticated, ensureInstructor, createQuestionPController.handle);
questionRoutes.get("/questionP", ensureAuthenticated, listQuestionPController.handle);
questionRoutes.get("/question", ensureAuthenticated, listQuestionsController.handle);
questionRoutes.get("/questionall", ensureAuthenticated, listAllQuestionsController.handle);
questionRoutes.get("/questionpall", ensureAuthenticated, listAllQuestionsPController.handle);

export { questionRoutes };
