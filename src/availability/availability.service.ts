import { IService } from '../core/service.interface';
import { IRepository } from '../core/repository.interface';
import { AvailabilityDTO } from './dto/availability.dto';

export class AvailabilityService implements IService<AvailabilityDTO> {
    
    private availabilityRepository: IRepository<AvailabilityDTO>;

    constructor(_availabilityRepository: IRepository<AvailabilityDTO>) {
        this.availabilityRepository = _availabilityRepository
    }


    /**
     * 
     * @param id 
     * @returns 
     */

    findById(id: number): Promise<AvailabilityDTO> {
       return this.availabilityRepository.findById(id).then(availabilityDto => {
        availabilityDto.days = "%" + availabilityDto.days
        return availabilityDto
       })
    }

    /**
     * 
     * @param options 
     * @returns 
     */
    findAll(options?: any): Promise<AvailabilityDTO[]> {
        return this.availabilityRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    delete(id: number): Promise<boolean> {
        return this.availabilityRepository.delete(id);
    }
    
    /**
     * 
     * @param t 
     */
     async update(address: AvailabilityDTO): Promise<AvailabilityDTO> {
        return this.availabilityRepository.update(address);
    }
}