import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/repository.interface";
import { RoleDTO } from '../dto/role.dto';
import { RoleDAO } from './role.dao';
import { RoleMapper } from '../dto/role.mapper';

export class RoleRepository implements IRepository<RoleDTO> {
    
    /**
     * 
     * @param id 
     * @returns 
     */
     async findById(id: number): Promise<RoleDTO> {
        const result = await RoleDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Role not found");
        return RoleMapper.mapToDto(result);
    }

     /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<RoleDTO[]> {
        return (await RoleDAO.findAll({
            where: filter
        })).map(role => RoleMapper.mapToDto(role));
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await RoleDAO.destroy({
            where: {
                id_role:id
            }
        });
        return result == 1;
    }

    /**
     * 
     * @param topDocUser
     */
        async update(role: RoleDTO): Promise<RoleDTO> {

            if (role.id_role === null) throw new InputError("No id for person");
    
            const row = await RoleDAO.findByPk(role.id_role);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.role = role.role;
            const result = await row.save()
            return RoleMapper.mapToDto(result);
        }
}