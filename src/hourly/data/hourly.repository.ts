import { InputError, NotFoundError } from "../../core/errors/errors";
import { IRepository, IRepositoryCreate } from "../../core/repository.interface";
import { HourlyDTO } from '../dto/hourly.dto';
import { HourlyDAO } from './hourly.dao';
import { HourlyMapper } from '../dto/houly.maper';



export interface IHourlyRepository extends IRepositoryCreate<HourlyDTO>, IRepository<HourlyDTO> {}
export class HourlyRepository implements IRepository<HourlyDTO> {



    
    
    async create(hourly: HourlyDTO): Promise<HourlyDTO> {
        try {
            const newHourly = await HourlyDAO.create(
                {
                    early_hours: hourly.early_hours,
                    appointment_duration: hourly.appointment_duration,
                    end_hours: hourly.end_hours

                }
            );
            const result: HourlyDTO = {
                early_hours: newHourly.early_hours,
                end_hours: newHourly.end_hours,
                appointment_duration: newHourly.appointment_duration
              
            };
            
            return result;
        } catch (err) {          
                console.log(err);
                
            throw err;
        }
    }
    /**
     * 
     * @param id 
     * @returns 
     */
     async findById(id: number): Promise<HourlyDTO> {
        const result = await HourlyDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Person not found");
        return HourlyMapper.mapToDto(result);
    }

     /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<HourlyDTO[]> {
        return (await HourlyDAO.findAll({
            where: filter
        })).map(hourly => HourlyMapper.mapToDto(hourly));
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await HourlyDAO.destroy({
            where: {
                id_hourly: id
            }
        });
        return result == 1;
    }

    /**
     * 
     * @param hourly
     */
        async update(hourly: HourlyDTO): Promise<HourlyDTO> {

            if (hourly.id_hourly === null) throw new InputError("No id for person");
    
            const row = await HourlyDAO.findByPk(hourly.id_hourly);
    
            if (row === null) throw new NotFoundError("Person not found");
    
            row.early_hours = hourly.early_hours;
            row.end_hours = hourly.end_hours;
            row.appointment_duration = hourly.appointment_duration;
            const result = await row.save()
            return HourlyMapper.mapToDto(result);
        }
}