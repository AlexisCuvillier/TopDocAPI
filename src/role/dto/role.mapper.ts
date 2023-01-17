import { RoleDAO } from '../data/role.dao';
import { RoleDTO } from './role.dto';


export class RoleMapper {
    static mapToDto(role: RoleDAO) : RoleDTO {
        const dto : RoleDTO = {
            role: role.role
        
        }
        return dto;
    }
}