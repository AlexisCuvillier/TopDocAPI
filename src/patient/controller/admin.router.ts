import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { patientHandler } from '../../inject';


export const patientRouter = Router();

patientRouter.get('/', patientHandler.findAll);
patientRouter.get('/:id', patientHandler.find);
patientRouter.post('/',  patientHandler.create);
patientRouter.delete('/:id', patientHandler.delete);
patientRouter.patch('/', patientHandler.update);

