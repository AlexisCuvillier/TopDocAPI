import sequelize from "../../core/database/sequelize";
import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepositoryCreate, IRepository } from '../../core/repository.interface';
import { TopDocUserDAO } from '../../topDocUser/data/topDocUser.dao';
import { AdministratorDTO, AdministratorUserDTO } from '../dto/administrator.dto';
import { AdministratorDAO } from './administrator.dao';
import { AdministratorMapper } from '../dto/administrator.mapper';

export interface IAdministratorRepository extends IRepositoryCreate<AdministratorUserDTO>, IRepository<AdministratorDTO> { }

export class AdministratorRepository implements IAdministratorRepository {

    /**
     * 
     * @param administrator
     */
    async update(administrator: AdministratorDTO): Promise<AdministratorDTO> {

        if (administrator.id_user === null) throw new InputError("No id for person or admin");

        const row = await AdministratorDAO.findByPk(administrator.id_user);

        if (row === null) throw new NotFoundError("Person not found");

        row.email_contact = administrator.email_contact;
        const result = await row.save()
        return AdministratorMapper.mapToAdministratorDto(result);
    }

    /**
     * 
     * @param filter 
     * @returns $
     */
    async findAll(filter: any): Promise<AdministratorDTO[]> {

        return (await AdministratorDAO.findAll({
            where: filter
        })).map(admin => AdministratorMapper.mapToAdministratorDto(admin));
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<AdministratorDTO> {
        const result = await AdministratorDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Not found");
        return AdministratorMapper.mapToAdministratorDto(result);
    }


    /**
     * 
     * @param admin 
     * @returns 
     */
    async create(admin: AdministratorUserDTO): Promise<AdministratorUserDTO> {

        const t = await sequelize.transaction();

       
        try {
            const newTopDocUser = await TopDocUserDAO.create(
                {
                    name: admin.name,
                    lastname: admin.lastname,
                    mail: admin.mail,
                    password: admin.password,
                    phone: admin.phone
                },
                {
                    transaction: t
                }
            );

            const newAdmin = await AdministratorDAO.create({
                id_user: newTopDocUser.id_user,
                email_contact: admin.email_contact,
                praticien: admin.praticien
            },
                {
                    transaction: t
                }
            );

            const result: AdministratorUserDTO = {
                id_user: newTopDocUser.id_user,
                name: newTopDocUser.name,
                lastname: newTopDocUser.lastname,
                mail: newTopDocUser.mail,
                password:newTopDocUser.password,
                phone: newTopDocUser.phone,
                email_contact: newAdmin.email_contact,
                praticien: newAdmin.praticien
            }

            await t.commit();
            return result;
        } catch (err) {  

            await t.rollback()
            console.log(err);
            
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