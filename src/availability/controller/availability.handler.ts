import { NextFunction, Request, Response } from "express";
import { AvailabilityService } from "../availability.service";
import { AvailabilityDTO } from '../dto/availability.dto';

export class AvailabilityHandler {
    private availabilityService : AvailabilityService;

    constructor(availabilityService: AvailabilityService){
        this.availabilityService = availabilityService;
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
     create = async (req: Request, res: Response, next: NextFunction) => {

        const availabilityDto: AvailabilityDTO = req.body;

        try {
            const result = await this.availabilityService.create(availabilityDto);
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
        const filters = req.query;

        try {
            const result = await this.availabilityService.findAll(filters)
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
            const result = await this.availabilityService.findById(id);
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
            await this.availabilityService.delete(id);
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
        const availabilityDto: AvailabilityDTO = req.body;

        try {
            const result = await this.availabilityService.update(availabilityDto);
            res.status(200).json(result);
        }catch(err) {
            next(err);
        }
     }
}