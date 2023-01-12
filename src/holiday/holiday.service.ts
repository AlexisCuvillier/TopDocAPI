import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { HolidayDTO } from './dto/holiday.dto';

export class HolidayService implements IService<HolidayDTO> {

    private holidayRepository: IRepository<HolidayDTO>;

    constructor(_holidayRepository: IRepository<HolidayDTO>) {
        this.holidayRepository = _holidayRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<HolidayDTO[]> {
        return this.holidayRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.holidayRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(topDocUser: HolidayDTO): Promise<HolidayDTO> {
        return this.holidayRepository.update(topDocUser);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<HolidayDTO> {
        return this.holidayRepository.findById(id);
    
    }
}

