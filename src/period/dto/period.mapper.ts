import { PeriodDAO } from '../data/period.dao';
import { PeriodDTO } from './period.dto';


export class PeriodMapper {
    static mapToDto(period: PeriodDAO) : PeriodDTO {
        const dto : PeriodDTO = {
            start_date: period.start_date,
            end_date: period.end_date,

        }
        return dto;
    }
}