import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository } from "../../core/repository.interface";
import { AvailabilityDTO } from '../dto/availability.dto';
import { AvailabilityMapper } from "../dto/availability.mapper";
import { AvailabilityDAO } from "./availability.dao";

export class AvailabilityRepository implements IRepository<AvailabilityDTO> {
    /**
     * 
     *  @param id
     *  @returns
     */
    async findById(id: number): Promise<AvailabilityDTO> {
        const result = await AvailabilityDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Address not found");
        return AvailabilityMapper.mapToDto(result);
    }

    /**
     * 
     *  @param filter
     *  @returns
     */
    async findAll(filter: any): Promise<AvailabilityDTO[]> {
        return (await AvailabilityDAO.findAll({
            where: filter
        })).map(address => AvailabilityMapper.mapToDto(address));
    }

     /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await AvailabilityDAO.destroy({
            where: {
                id_days:id
            }
        });
        return result == 1
    }

    /**
     * 
     * @param topDocUser
     */

    async update(day: AvailabilityDTO): Promise<AvailabilityDTO> {
        if ( day.id_days === null) throw new InputError("No id for address");
        const row = await AvailabilityDAO.findByPk(day.id_days);
        if (row === null) throw new NotFoundError("Address not found");
        row.days = day.days;
        const result = await row.save()
        return AvailabilityMapper.mapToDto(result);
    }

}