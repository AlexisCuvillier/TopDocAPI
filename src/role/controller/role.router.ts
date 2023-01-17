import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { roleHandler } from '../../inject';




export const roleRouter = Router();

roleRouter.get('/',  validate, roleHandler.findAll);


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
 roleRouter.get('/:id', validate, roleHandler.find);
 roleRouter.delete('/:id', validate, roleHandler.delete);
 roleRouter.patch('/', validate,  roleHandler.update);