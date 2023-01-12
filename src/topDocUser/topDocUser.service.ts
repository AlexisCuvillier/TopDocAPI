import { IRepository } from "../core/repository.interface";
import { IService } from "../core/service.interface";
import { TopDocUserDTO } from "./dto/topDocUser.dto";

export class TopDocUserService implements IService<TopDocUserDTO> {

    private topDocUserRepository: IRepository<TopDocUserDTO>;

    constructor(_topDocUserRepository: IRepository<TopDocUserDTO>) {
        this.topDocUserRepository = _topDocUserRepository;
    }

    /**
     * 
     * @param options 
     * @returns 
     */
     async findAll(options?: any): Promise<TopDocUserDTO[]> {
        return this.topDocUserRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.topDocUserRepository.delete(id);
    }

    /**
     * 
     * @param t 
     */
    async update(topDocUser: TopDocUserDTO): Promise<TopDocUserDTO> {
        return this.topDocUserRepository.update(topDocUser);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<TopDocUserDTO> {
        return this.topDocUserRepository.findById(id).then(topDocUserDto => {
            topDocUserDto.name = "M. " + topDocUserDto.name; //INFO dans le service on implémente la logique métier(fut-elle basique comme ici)
            return topDocUserDto;
        });
    }
}

