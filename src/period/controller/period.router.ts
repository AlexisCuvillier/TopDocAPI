import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { hourlyHandler, periodHandler, topDocUserHandler } from "../../inject";



export const periodRouter = Router();

periodRouter.get('/',  validate, periodHandler.findAll);


periodRouter.get('/:id', validate, periodHandler.find);



periodRouter.delete('/:id', validate, periodHandler.delete);



periodRouter.patch('/', validate,  periodHandler.update);

periodRouter.post('/', validate, periodHandler.create)