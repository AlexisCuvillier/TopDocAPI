import { NextFunction, Request, Response } from "express";

import { HourlyService } from '../hourly.service';
import { HourlyDTO } from '../dto/hourly.dto';


export class HourlyHandler {

    private hourlyService: HourlyService;

    constructor(topDocUserService: HourlyService) {
        this.hourlyService = topDocUserService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.hourlyService.findAll(filters)
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
            const result = await this.hourlyService.findById(id);
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
            await this.hourlyService.delete(id);
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
        const hourlyDto: HourlyDTO = req.body;

        try {
            const result = await this.hourlyService.update(hourlyDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
