import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { hourlyHandler } from '../../inject';

export const hourlyRouter = Router();

hourlyRouter.get('/',  validate, hourlyHandler.findAll);


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
 hourlyRouter.get('/:id', validate, hourlyHandler.find);

 hourlyRouter.delete('/:id', validate, hourlyHandler.delete);
 hourlyRouter.patch('/', validate,  hourlyHandler.update);