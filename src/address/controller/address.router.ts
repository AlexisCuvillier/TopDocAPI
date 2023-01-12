import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { addressHandler } from '../../inject';



export const addressRouter = Router();

addressRouter.get('/',  validate, addressHandler.findAll);
addressRouter.get('/:id', validate, addressHandler.find);
addressRouter.delete('/:id', validate, addressHandler.delete);
addressRouter.patch('/', validate,  addressHandler.update);