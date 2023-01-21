import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';
import { AdministratorDAO } from '../data/administrator.dao';
import { AdministratorDTO, AdministratorUserDTO } from './administrator.dto';


export class AdministratorMapper {
    static mapToAdministratorDto(administrator: AdministratorDAO) : AdministratorDTO {
        const dto : AdministratorDTO = {
            id_user: administrator.id_user,
            email_contact: administrator.email_contact,
            praticien: administrator.praticien
        }
        return dto;
    }

    static mapToAdministratorUserDto(administrator: AdministratorDAO, topDocUser: TopDocUserDAO): AdministratorUserDTO | null {
        if(administrator === null) return null;

        const dto: AdministratorUserDTO = {
            id_user: topDocUser.id_user,
            email_contact: administrator.email_contact,
            praticien:administrator.praticien,
            name:topDocUser.name,
            lastname:topDocUser.lastname,
            password:topDocUser.password,
            mail:topDocUser.mail,
            phone:topDocUser.phone
        }
        return dto;
    }
}