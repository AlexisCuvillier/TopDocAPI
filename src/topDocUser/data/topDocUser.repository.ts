import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/repository.interface";
import { TopDocUserDTO } from '../dto/topDocUser.dto';
import { TopDocUserMapper } from "../dto/topDocUser.mapper";
import { TopDocUserDAO } from "./topDocUser.dao";

export class TopDocUserRepository implements IRepository<TopDocUserDTO> {
    
    /**
     * 
     * @param id 
     * @returns 
     */
     async findById(id: number): Promise<TopDocUserDTO> {
        const result = await TopDocUserDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Person not found");
        return TopDocUserMapper.mapToDto(result);
    }

     /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<TopDocUserDTO[]> {
        return (await TopDocUserDAO.findAll({
            where: filter
        })).map(topDocUser => TopDocUserMapper.mapToDto(topDocUser));
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await TopDocUserDAO.destroy({
            where: {
                id_user: id
            }
        });
        return result == 1;
    }

    /**
     * 
     * @param topDocUser
     */
        async update(topDocUser: TopDocUserDTO): Promise<TopDocUserDTO> {

            if (topDocUser.id_user === null) throw new InputError("No id for person");
    
            const row = await TopDocUserDAO.findByPk(topDocUser.id_user);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.name = topDocUser.name;
            row.lastname = topDocUser.lastname;
            row.mail = topDocUser.mail;
            row.password = topDocUser.password;
            row.phone = topDocUser.phone
            const result = await row.save()
            return TopDocUserMapper.mapToDto(result);
        }
}