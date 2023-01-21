import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { PeriodDTO } from "./dto/period.dto";



export class PeriodService implements IService<PeriodDTO> {

    private periodRepository: IRepository<PeriodDTO>;

    constructor(_periodRepository: IRepository<PeriodDTO>) {
        this.periodRepository = _periodRepository;
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
    async findById(id: number): Promise<PeriodDTO> {
        return this.periodRepository.findById(id);
    }
}

