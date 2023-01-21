import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { patientHandler } from '../../inject';


export const patientRouter = Router();

patientRouter.get('/', validate, patientHandler.findAll);
patientRouter.get('/:id', validate, patientHandler.find);
patientRouter.post('/', validate,  patientHandler.create);
patientRouter.delete('/:id', validate, patientHandler.delete);
patientRouter.patch('/', validate, patientHandler.update);

