import { IRepository } from "../../core/repository.interface";
import { AddressDTO } from '../dto/address.dto';
import { AddressDAO } from "./address.dao";
import { InputError, NotFoundError } from '../../core/errors/errors';
import { AddressMapper } from "../dto/address.mapper";

export class AddressRepository implements IRepository<AddressDTO> {
    /**
     * 
     *  @param id
     *  @returns
     */
    async findById(id: number): Promise<AddressDTO> {
        const result = await AddressDAO.findByPk(id);
        if (result === null) throw new NotFoundError("Address not found");
        return AddressMapper.mapToDto(result);
    }

    /**
     * 
     *  @param filter
     *  @returns
     */
    async findAll(filter: any): Promise<AddressDTO[]> {
        return (await AddressDAO.findAll({
            where: filter
        })).map(address => AddressMapper.mapToDto(address));
    }

     /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        const result = await AddressDAO.destroy({
            where: {
                id_address: id
            }
        });
        return result == 1
    }

    /**
     * 
     * @param topDocUser
     */

    async update(address: AddressDTO): Promise<AddressDTO> {
        if ( address.id_address === null) throw new InputError("No id for address");

        const row = await AddressDAO.findByPk(address.id_address);

        if (row === null) throw new NotFoundError("Address not found");

        row.street = address.street;
        row.number_street = address.number_street;
        row.additional_information = address.additional_information;
        row.zip_code = address.zip_code;
        row.city = address.city;
        const result = await row.save()
        return AddressMapper.mapToDto(result);
    }

}