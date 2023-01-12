import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { topDocUserHandler } from "../../inject";



export const topDocUserRouter = Router();

topDocUserRouter.get('/',  validate, topDocUserHandler.findAll);


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
topDocUserRouter.get('/:id', validate, topDocUserHandler.find);

topDocUserRouter.delete('/:id', validate, topDocUserHandler.delete);
topDocUserRouter.patch('/', validate,  topDocUserHandler.update);