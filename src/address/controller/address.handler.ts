import { NextFunction, Request, Response } from "express";
import { AddressService } from '../address.service';
import { AddressDTO } from '../dto/address.dto';



export class AddressHandler {

    private addressService: AddressService;

    constructor(addressService: AddressService) {
        this.addressService = addressService;
    }


    /**
     * 
     * @param req 
     * @param res 
     */
    findAll = async (req: Request, res: Response, next: NextFunction) => {
        const filters = req.query;

        try {
            const result = await this.addressService.findAll(filters)
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
            const result = await this.addressService.findById(id);
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
            await this.addressService.delete(id);
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
        const topDocUserDto: AddressDTO = req.body;

        try {
            const result = await this.addressService.update(topDocUserDto);
            res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }


}
