import { NextFunction, Request, Response } from "express";
import { PeriodDTO } from "../dto/period.dto";
import { PeriodService } from "../period.service";



export class PeriodHandler {

    private periodService: PeriodService;

    constructor(periodService: PeriodService) {
        this.periodService = periodService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.periodService.findAll(filters)
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
            const result = await this.periodService.findById(id);
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
            await this.periodService.delete(id);
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
        const periodDto: PeriodDTO = req.body;

        try {
            const result = await this.periodService.update(periodDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
