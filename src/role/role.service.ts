import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { RoleDTO } from './dto/role.dto';


export class RoleService implements IService<RoleDTO> {

    private roleRepository: IRepository<RoleDTO>;

    constructor(_roleRepository: IRepository<RoleDTO>) {
        this.roleRepository = _roleRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<RoleDTO[]> {
        return this.roleRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.roleRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(role: RoleDTO): Promise<RoleDTO> {
        return this.roleRepository.update(role);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<RoleDTO> {
        return this.roleRepository.findById(id);

    
    }
}

