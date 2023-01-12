import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { availabilityHandler } from "../../inject";





export const availabilityRouter = Router();

availabilityRouter.get('/',  validate, availabilityHandler.findAll);
availabilityRouter.get('/:id', validate, availabilityHandler.find);
availabilityRouter.delete('/:id', validate, availabilityHandler.delete);
availabilityRouter.patch('/', validate,  availabilityHandler.update);