import { NextFunction, Request, Response } from "express";
import { HolidayService } from '../holiday.service';
import { HolidayDTO } from '../dto/holiday.dto';



export class HolidayHandler {

    private holydayService: HolidayService;

    constructor(holydayService: HolidayService) {
        this.holydayService = holydayService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.holydayService.findAll(filters)
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
            const result = await this.holydayService.findById(id);
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
            await this.holydayService.delete(id);
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
        const holidayDto: HolidayDTO = req.body;

        try {
            const result = await this.holydayService.update(holidayDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
