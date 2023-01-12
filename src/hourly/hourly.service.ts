import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { HourlyDTO } from './dto/hourly.dto';

export class HourlyService implements IService<HourlyDTO> {

    private hourlyRepository: IRepository<HourlyDTO>;

    constructor(_hourlyRepository: IRepository<HourlyDTO>) {
        this.hourlyRepository = _hourlyRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<HourlyDTO[]> {
        return this.hourlyRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.hourlyRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(hourly: HourlyDTO): Promise<HourlyDTO> {
        return this.hourlyRepository.update(hourly);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<HourlyDTO> {
        return this.hourlyRepository.findById(id);
    }
}

