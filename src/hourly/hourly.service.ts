import { IRepository } from "../core/repository.interface";
import { IService, IServiceCreate } from '../core/service.interface';
import { HourlyDTO } from './dto/hourly.dto';
import { IHourlyRepository } from './data/hourly.repository';

export interface IHourlyService extends IService<HourlyDTO>, IServiceCreate<HourlyDTO> {}
export class HourlyService implements IService<HourlyDTO> {

    private hourlyRepository: IHourlyService;

    constructor(_hourlyRepository: IHourlyRepository) {
        this.hourlyRepository = _hourlyRepository;
    }

    async create(hourly: HourlyDTO): Promise<HourlyDTO> {

        return this.hourlyRepository.create(hourly);
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

