import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { topDocUserHandler } from "../../inject";



export const topDocUserRouter = Router();

topDocUserRouter.get('/',  validate, topDocUserHandler.findAll);



topDocUserRouter.get('/:id', validate, topDocUserHandler.find);

topDocUserRouter.delete('/:id', validate, topDocUserHandler.delete);
topDocUserRouter.patch('/', validate,  topDocUserHandler.update);