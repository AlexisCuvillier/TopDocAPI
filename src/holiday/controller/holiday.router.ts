import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { holidayHandler } from "../../inject";




export const holidayRouter = Router();

holidayRouter.get('/',  validate, holidayHandler.findAll);


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
 holidayRouter.get('/:id', validate, holidayHandler.find);

 holidayRouter.delete('/:id', validate, holidayHandler.delete);
 holidayRouter.patch('/', validate,  holidayHandler.update);