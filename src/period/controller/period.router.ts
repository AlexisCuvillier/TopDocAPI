import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { periodHandler, topDocUserHandler } from "../../inject";



export const periodRouter = Router();

periodRouter.get('/',  validate, periodHandler.findAll);


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
periodRouter.get('/:id', validate, periodHandler.find);
periodRouter.delete('/:id', validate, periodHandler.delete);
periodRouter.patch('/', validate,  periodHandler.update);