import { HolidayDAO } from "../data/holiday.dao";
import { HolidayDTO } from './holiday.dto';

export class HolidayMapper {
    static mapToDto(holiday: HolidayDAO) : HolidayDTO {
        const dto : HolidayDTO = {
            start_date: holiday.start_date,
            end_date: holiday.end_date
        }
        return dto;
    }
}