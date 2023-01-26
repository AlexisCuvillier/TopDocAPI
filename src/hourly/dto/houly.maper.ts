import { HourlyDTO } from './hourly.dto';
import { HourlyDAO } from '../data/hourly.dao';


export class HourlyMapper {
    static mapToDto(hourly: HourlyDAO) : HourlyDTO {
        const dto : HourlyDTO = {
            // id_hourly: hourly.id_hourly,
            early_hours: hourly.early_hours,
            end_hours: hourly.end_hours,
            appointment_duration: hourly.appointment_duration,

        }
        return dto;
    }
}