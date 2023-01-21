import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { administratorHandler } from "../../inject";


export const administratorRouter = Router();

administratorRouter.get('/', validate, administratorHandler.findAll);
administratorRouter.get('/:id', validate, administratorHandler.find);
administratorRouter.post('/', validate,  administratorHandler.create);
administratorRouter.delete('/:id', validate, administratorHandler.delete);
administratorRouter.patch('/', validate, administratorHandler.update);

