import { IRepository } from "../core/repository.interface";
import { IService, IServiceCreate } from '../core/service.interface';
import { PeriodDTO } from "./dto/period.dto";
import { IPatientRepository } from '../patient/data/patient.repository';
import { IPeriodRepository } from './data/period.repository';


export interface IPeriodService extends IService<PeriodDTO>, IServiceCreate<PeriodDTO> {}
export class PeriodService implements IService<PeriodDTO> {

    private periodRepository: IPeriodService;

    constructor(_periodRepository: IPeriodRepository) {
        this.periodRepository = _periodRepository;
    }


    async create(period: PeriodDTO): Promise<PeriodDTO> {
        return this.periodRepository.create(period)
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<PeriodDTO[]> {
        return this.periodRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.periodRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(period: PeriodDTO): Promise<PeriodDTO> {
        return this.periodRepository.update(period);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<PeriodDTO | null> {
        return this.periodRepository.findById(id);
    }
}

