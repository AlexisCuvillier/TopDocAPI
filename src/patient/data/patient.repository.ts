import sequelize from "../../core/database/sequelize";
import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepositoryCreate, IRepository } from '../../core/repository.interface';
import { PatientUserDTO, PatientDTO } from '../dto/patient.dto';
import { PatientMapper } from "../dto/patient.mapper";
import { PatientDAO } from './patient.dao';
import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';

export interface IPatientRepository extends IRepositoryCreate<PatientUserDTO>, IRepository<PatientDTO> { }

export class PatientRepository implements IPatientRepository {

    /**
     * 
     * @param patient
     */
    async update(patient: PatientDTO): Promise<PatientDTO> {

        if (patient.id_user === null) throw new InputError("No id for person or admin");

        const row = await PatientDAO.findByPk(patient.id_user);

        if (row === null) throw new NotFoundError("Person not found");

        row.num_secu = patient.num_secu;
        const result = await row.save()
        return PatientMapper.mapToPatientDto(result);
    }

    /**
     * 
     * @param filter 
     * @returns $
     */
    async findAll(filter: any): Promise<PatientDTO[]> {

        return (await PatientDAO.findAll({
            where: filter
        })).map(patient => PatientMapper.mapToPatientDto(patient));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<PatientDTO> {
        const result = await PatientDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Not found");
        return PatientMapper.mapToPatientDto(result);
    }


    /**
     * 
     * @param patient 
     * @returns 
     */
    async create(patient: PatientUserDTO): Promise<PatientUserDTO> {

        const t = await sequelize.transaction();

       
        try {
            const newTopDocUser = await TopDocUserDAO.create(
                {
                    name: patient.name,
                    lastname: patient.lastname,
                    mail: patient.mail,
                    password: patient.password,
                    phone: patient.phone
                },
                {
                    transaction: t
                }
            );

            const newPatient = await PatientDAO.create({
                id_user: newTopDocUser.id_user,
                num_secu: patient.num_secu
            },
                {
                    transaction: t
                }
            );

            const result: PatientUserDTO = {
                id_user: newTopDocUser.id_user,
                name: newTopDocUser.name,
                lastname: newTopDocUser.lastname,
                mail: newTopDocUser.mail,
                password:newTopDocUser.password,
                phone: newTopDocUser.phone,
                num_secu: newPatient.num_secu
            }

            await t.commit();
            return result;
        } catch (err) {   

                   
            await t.rollback()
            throw err;
        }
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


}