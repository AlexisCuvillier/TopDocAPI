import { Router } from "express";
import { validate } from "../../api/middlewares/validation.global";
import { periodHandler, topDocUserHandler } from "../../inject";



export const periodRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Persons
 *      description: Manage persons
 */

/**
 * @openapi
 * /api/patients:
 *   get:
 *      tags: [Patients]
 *      description: Get list of patients
 *      responses:
 *        200:
 *          description: Get all.
 */
periodRouter.get('/',  validate, periodHandler.findAll);


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



/**
 * @openapi
 * /api/patients/{id}:
 *  delete:
 *      tags: [Patients]
 *      description: Delete a patient
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1000000
 *      responses:
 *        200:
 *          description: Delete.
 */
periodRouter.delete('/:id', validate, periodHandler.delete);



/**
 * @openapi
 * /api/patient/{id}:
 *  patch:
 *      tags: [Patients]
 *      description: Update a patient.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1000000
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "secu_number":"197059740706475", "lastname": "lastname", "firstname": "firstname", "mail": "email@email.fr", "password": "string","birthdate": "01-01-2000", "phone_number" : "0123456789", "description": "description","avatar": "avatar" }
 *      responses:
 *        200:
 *          description: Update.
 */
periodRouter.patch('/', validate,  periodHandler.update);