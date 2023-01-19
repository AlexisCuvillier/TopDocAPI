import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';
import { PatientDAO } from '../data/patient.dao';
import { PatientDTO, PatientUserDTO } from './patient.dto';


export class PatientMapper {
    static mapToPatientDto(patient: PatientDAO) : PatientDTO {
        const dto : PatientDTO = {
            id_user: patient.id_user,
            num_secu: patient.num_secu,
        }
        return dto;
    }

    static mapToPatientUserDto(patient: PatientDAO, topDocUser: TopDocUserDAO): PatientUserDTO | null {
        if(patient === null) return null;

        const dto: PatientUserDTO = {
            id_user: topDocUser.id_user,
            num_secu: patient.num_secu,
            name:topDocUser.name,
            lastname:topDocUser.lastname,
            password:topDocUser.password,
            mail:topDocUser.mail,
            phone:topDocUser.phone
        }
        return dto;
    }
}