import { NextFunction, Request, Response } from "express";
import { CabinetService } from '../cabinet.service';
import { CabinetDTO } from '../dto/cabinet.dto';



export class CabinetHandler {

    private cabinetService: CabinetService;

    constructor(cabinetService: CabinetService) {
        this.cabinetService = cabinetService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.cabinetService.findAll(filters)
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
            const result = await this.cabinetService.findById(id);
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
            await this.cabinetService.delete(id);
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
        const cabinetDto: CabinetDTO = req.body;

        try {
            const result = await this.cabinetService.update(cabinetDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
