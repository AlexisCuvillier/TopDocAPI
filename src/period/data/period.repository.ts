import { NotFoundError, InputError } from '../../core/errors/errors';
import { IRepository } from "../../core/repository.interface";
import { PeriodDTO } from '../dto/period.dto';
import { PeriodDAO } from './period.dao';
import { PeriodMapper } from '../dto/period.mapper';

export class PeriodRepository implements IRepository<PeriodDTO> {
    
    /**
     * 
     * @param id 
     * @returns 
     */
     async findById(id: number): Promise<PeriodDTO> {
        const result = await PeriodDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Person not found");
        return PeriodMapper.mapToDto(result);
    }

     /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<PeriodDTO[]> {
        return (await PeriodDAO.findAll({
            where: filter
        })).map(period => PeriodMapper.mapToDto(period));
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await PeriodDAO.destroy({
            where: {
                id_period: id
            }
        });
        return result == 1;
    }

    /**
     * 
     * @param period
     */
        async update(period: PeriodDTO): Promise<PeriodDTO> {

            if (period.id_period === null) throw new InputError("No id for person");
    
            const row = await PeriodDAO.findByPk(period.id_period);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.start_date = period.start_date;
            row.end_date = period.end_date;

            const result = await row.save()
            return PeriodMapper.mapToDto(result);
        }
}