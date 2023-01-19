import { IServiceCreate, IService } from "../core/service.interface";
import { PatientDTO, PatientUserDTO } from './dto/patient.dto';
import { IPatientRepository } from './data/patient.repository';
import bcrypt = require("bcrypt");


export interface IPatientService extends IService<PatientDTO>, IServiceCreate<PatientUserDTO> {
}

export class PatientService implements IPatientService{ 

    private patientRepository: IPatientRepository; 

    constructor(patientRepository: IPatientRepository) {
        this.patientRepository = patientRepository;
    }

    /**
     * 
     * @param patient 
     */
    async update(patient: PatientDTO): Promise<PatientDTO> {
       return this.patientRepository.update(patient);
    }

    /**
     * 
     * @param filter 
     * @returns 
     */
    async findAll(filter: any): Promise<PatientDTO[]> {
        return this.patientRepository.findAll(filter);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async findById(id: number): Promise<PatientDTO> {
        return this.patientRepository.findById(id);
            
    }

    /**
     * 
     * @param patient 
     * @returns 
     */
    async create(patient: PatientUserDTO): Promise<PatientUserDTO> {
        let hashPass = await bcrypt.hash(patient.password, 10)
        let patienInfo : PatientUserDTO = {
            num_secu: patient.num_secu,
            name: patient.name,
            lastname: patient.lastname,
            password: hashPass,
            phone: patient.phone,
            mail: patient.mail
        }
        return this.patientRepository.create(patienInfo);
    }

    /**
     * 
     * @param id 
     */
    async delete(id: number): Promise<boolean> {
        return this.patientRepository.delete(id);
    }

}