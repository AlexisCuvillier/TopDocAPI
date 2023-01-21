import { NextFunction, Request, Response } from "express";
import { IAdministratorService } from '../administrator.service';
import { AdministratorUserDTO, AdministratorFilterDTO, AdministratorDTO } from '../dto/administrator.dto';



export class AdministratorHandler {

    private administratorService: IAdministratorService;

    constructor(administratorService: IAdministratorService) {
        this.administratorService = administratorService;
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    create = async (req: Request, res: Response, next: NextFunction) => {

        const adminDto: AdministratorUserDTO = req.body;

        try {
            const result = await this.administratorService.create(adminDto);
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }

    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {

        const filters = req.query as unknown as AdministratorFilterDTO;

        try {
            const result = await this.administratorService.findAll(filters)
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
            const result = await this.administratorService.findById(id);
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
            await this.administratorService.delete(id);
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
    update = async(req: Request, res: Response, next: NextFunction) => {
        const adminDto: AdministratorDTO = req.body;

        try {
            const result = await this.administratorService.update(adminDto);
            res.status(200).json(result);

        } catch(err) {
            next(err);
        }
    }
}