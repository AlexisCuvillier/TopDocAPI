import { NextFunction, Request, Response } from "express";
import { TopDocUserDTO } from "../dto/topDocUser.dto";
import { TopDocUserService } from "../topDocUser.service";


export class TopDocUserHandler {

    private topDocUserService: TopDocUserService;

    constructor(topDocUserService: TopDocUserService) {
        this.topDocUserService = topDocUserService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.topDocUserService.findAll(filters)
            res.status(200).json(result)

        } catch (err) {
            next(err);
        }
    }




    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    find = async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id as unknown as number;
        try {
            const result = await this.topDocUserService.findById(id);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    delete = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id as unknown as number;

        try {
            await this.topDocUserService.delete(id);
            res.status(200).send();

        } catch (err) {
            next(err)
        }
    }

    /**
     * 
     * @param req 
     * @param res 
     * @param next 
     */
    update = async (req: Request, res: Response, next: NextFunction) => {
        const topDocUserDto: TopDocUserDTO = req.body;

        try {
            const result = await this.topDocUserService.update(topDocUserDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
