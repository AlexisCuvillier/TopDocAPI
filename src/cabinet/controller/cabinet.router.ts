import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { cabinetHandler } from '../../inject';




export const cabinetRouter = Router();

cabinetRouter.get('/',  validate, cabinetHandler.findAll);


/**
 * @swagger
 * tags:
 *      name: Persons
 *      description: Manage persons
 */

/**
 * @openapi
 * /api/persons?mail={mail}:
 *  get:
 *      tags: [Persons]
 *      description: Get a person by mail
 *      parameters:
 *       - name: mail
 *         in: path
 *         required: true
 *         type: string
 *         default: luc@f.fr
 *      responses:
 *        200:
 *          description: Get person of given mail.
 */
 cabinetRouter.get('/:id', validate, cabinetHandler.find);
 cabinetRouter.delete('/:id', validate, cabinetHandler.delete);
 cabinetRouter.patch('/', validate,  cabinetHandler.update);