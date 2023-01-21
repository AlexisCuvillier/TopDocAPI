import { IService, IServiceCreate } from '../core/service.interface';
import { IRepository } from '../core/repository.interface';
import { AvailabilityDTO } from './dto/availability.dto';
import { IAvailabilityRepository } from './data/availability.repository';

export interface IAvailabilityService extends IService<AvailabilityDTO>, IServiceCreate<AvailabilityDTO> {}
export class AvailabilityService implements IAvailabilityService {
    
    private availabilityRepository: IAvailabilityRepository;

    constructor(availabilityRepository: IAvailabilityRepository) {
        this.availabilityRepository = availabilityRepository
    }
  

    async create(availability: AvailabilityDTO): Promise<AvailabilityDTO> {

        return this.availabilityRepository.create(availability);
    }



    /**
     * 
     * @param id 
     * @returns 
     */

    findById(id: number): Promise<AvailabilityDTO> {
       return this.availabilityRepository.findById(id)
 
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