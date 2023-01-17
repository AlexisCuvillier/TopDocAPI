import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/repository.interface";
import { CabinetDTO } from '../dto/cabinet.dto';
import { CabinetMapper } from '../dto/cabinet.mapper';
import { CabinetDAO } from './cabinet.dao';


export class CabinetRepository implements IRepository<CabinetDTO> {
    
    /**
     * 
     * @param id 
     * @returns 
     */
     async findById(id: number): Promise<CabinetDTO> {
        const result = await CabinetDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Role not found");
        return CabinetMapper.mapToDto(result);
    }

     /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<CabinetDTO[]> {
        return (await CabinetDAO.findAll({
            where: filter
        })).map(cabinet => CabinetMapper.mapToDto(cabinet));
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await CabinetDAO.destroy({
            where: {
                id_cabinet:id
            }
        });
        return result == 1;
    }

    /**
     * 
     * @param topDocUser
     */
        async update(cabinet: CabinetDTO): Promise<CabinetDTO> {

            if (cabinet.id_cabinet === null) throw new InputError("No id for person");
    
            const row = await CabinetDAO.findByPk(cabinet.id_cabinet);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.id_cabinet = cabinet.id_cabinet;
            const result = await row.save()
            return CabinetMapper.mapToDto(result);
        }
}