import { IServiceCreate, IService } from "../core/service.interface";
import { AdministratorDTO, AdministratorUserDTO } from './dto/administrator.dto';
import { IAdministratorRepository } from './data/administrator.repository';
import bcrypt = require("bcrypt");


export interface IAdministratorService extends IService<AdministratorDTO>, IServiceCreate<AdministratorUserDTO> {
}

export class AdministratorService implements IAdministratorService{ 

    private administratorRepository: IAdministratorRepository; 

    constructor(administratorRepository: IAdministratorRepository) {
        this.administratorRepository = administratorRepository;
    }

    /**
     * 
     * @param admin 
     */
    async update(admin: AdministratorDTO): Promise<AdministratorDTO> {
       return this.administratorRepository.update(admin);
    }

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<AdministratorDTO[]> {
        return this.administratorRepository.findAll(filter);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdministratorDTO> {
        return this.administratorRepository.findById(id);
            
    }

    /**
     * 
     * @param admin 
     * @returns 
     */
    async create(admin: AdministratorUserDTO): Promise<AdministratorUserDTO> {
        let hashPass = await bcrypt.hash(admin.password, 10)
        let adminInfo : AdministratorUserDTO = {
            email_contact: admin.email_contact,
            praticien: admin.praticien,
            name: admin.name,
            lastname: admin.lastname,
            password: hashPass,
            phone: admin.phone,
            mail: admin.mail
        }
        return this.administratorRepository.create(adminInfo);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.administratorRepository.delete(id);
    }

}