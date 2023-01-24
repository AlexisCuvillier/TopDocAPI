import { NextFunction, Request, Response } from "express";
import { IPatientService } from '../patient.service';
import { PatientUserDTO, PatientFilterDTO, PatientDTO } from '../dto/patient.dto';


export class PatientHandler {

    private patientService: IPatientService;

    constructor(patientService: IPatientService) {
        this.patientService = patientService;
    }

    /**
     * 
     * @param req 
     * @param res 
     * @returns 
     */
    create = async (req: Request, res: Response, next: NextFunction) => {

        const patientDto: PatientUserDTO = req.body;

        try {
            const result = await this.patientService.create(patientDto);
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

        const filters = req.query as unknown as PatientFilterDTO;

        try {
            const result = await this.patientService.findAll(filters)
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
            const result = await this.patientService.findById(id);
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
            await this.patientService.delete(id);
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
        const patientDto: PatientUserDTO = req.body;

        try {
            const result = await this.patientService.update(patientDto);
            res.status(200).json(result);

        } catch(err) {
            next(err);
        }
    }
}