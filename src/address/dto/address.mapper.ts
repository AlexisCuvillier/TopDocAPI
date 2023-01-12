import { AddressDAO } from '../data/address.dao';
import { AddressDTO } from './address.dto';
export class AddressMapper {
    static mapToDto (address: AddressDAO) : AddressDTO {
        const dto : AddressDTO = {
            zip_code: address.zip_code,
            street: address.street,
            number_street: address.number_street,
            additional_information: address.additional_information,
            city: address.city
        }
        return dto;
    }
}