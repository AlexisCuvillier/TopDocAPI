import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/repository.interface";
import { HolidayDTO } from '../dto/holiday.dto';
import { HolidayDAO } from './holiday.dao';
import { HolidayMapper } from '../dto/holiday.mapper';

export class HolidayRepository implements IRepository<HolidayDTO> {
    /**
     * 
     *  @param id
     *  @returns
     */
    async findById(id: number): Promise<HolidayDTO> {
        const result = await HolidayDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Address not found");
        return HolidayMapper.mapToDto(result);
    }

    /**
     * 
     *  @param filter
     *  @returns
     */
    async findAll(filter: any): Promise<HolidayDTO[]> {
        return (await HolidayDAO.findAll({
            where: filter
        })).map(address => HolidayMapper.mapToDto(address));
    }

     /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await HolidayDAO.destroy({
            where: {
                id_holiday:id
            }
        });
        return result == 1
    }

    /**
     * 
     * @param topDocUser
     */

    async update(holiday: HolidayDTO): Promise<HolidayDTO> {
        if ( holiday.id_holiday === null) throw new InputError("No id for holiday");
        const row = await HolidayDAO.findByPk(holiday.id_holiday);
        if (row === null) throw new NotFoundError("No date found");
        row.start_date = holiday.start_date;
        row.end_date = holiday.end_date;
        const result = await row.save()
        return HolidayMapper.mapToDto(result);
    }

}