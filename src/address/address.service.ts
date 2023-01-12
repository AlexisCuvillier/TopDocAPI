import { IService } from '../core/service.interface';
import { AddressDTO } from './dto/address.dto';
import { AddressRepository } from './data/address.repository';
import { IRepository } from '../core/repository.interface';

export class AddressService implements IService<AddressDTO> {
    
    private addressRepository: IRepository<AddressDTO>;

    constructor(_addressRepository: IRepository<AddressDTO>) {
        this.addressRepository = _addressRepository
    }


    /**
     * 
     * @param id 
     * @returns 
     */

    findById(id: number): Promise<AddressDTO> {
       return this.addressRepository.findById(id).then(addressDto => {
        addressDto.street = "%" + addressDto.street
        return addressDto
       })
    }

    /**
     * 
     * @param options 
     * @returns 
     */
    findAll(options?: any): Promise<AddressDTO[]> {
        return this.addressRepository.findAll(options);
    }

    /**
     * 
     * @param id 
     */
    delete(id: number): Promise<boolean> {
        return this.addressRepository.delete(id);
    }
    
    /**
     * 
     * @param t 
     */
     async update(address: AddressDTO): Promise<AddressDTO> {
        return this.addressRepository.update(address);
    }
}