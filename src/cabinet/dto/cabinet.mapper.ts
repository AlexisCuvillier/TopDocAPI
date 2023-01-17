import { CabinetDAO } from '../data/cabinet.dao';
import { CabinetDTO } from './cabinet.dto';
export class CabinetMapper {
    static mapToDto(cabinet: CabinetDAO) : CabinetDTO {
        const dto : CabinetDTO = {
            id_cabinet: cabinet.id_cabinet
        }
        return dto
    }
}