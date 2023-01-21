import { AvailabilityDAO } from "../data/availability.dao";
import { AvailabilityDTO } from './availability.dto';

export class AvailabilityMapper {
   static mapToDto (availability: AvailabilityDAO) : AvailabilityDTO
   {
    const dto : AvailabilityDTO = {
        id_days: availability.id_days,
        days: availability.days
    }
    return dto;
   }
}