import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { CabinetDTO } from './dto/cabinet.dto';


export class CabinetService implements IService<CabinetDTO> {

    private cabinetRepository: IRepository<CabinetDTO>;

    constructor(_cabinetRepository: IRepository<CabinetDTO>) {
        this.cabinetRepository = _cabinetRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<CabinetDTO[]> {
        return this.cabinetRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.cabinetRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(cabinet: CabinetDTO): Promise<CabinetDTO> {
        return this.cabinetRepository.update(cabinet);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<CabinetDTO> {
        return this.cabinetRepository.findById(id);

    
    }
}

