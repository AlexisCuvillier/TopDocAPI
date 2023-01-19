export interface PatientDTO {
    id_user?: number
    num_secu: number
}

export interface PatientUserDTO {
    id_user?:number
    num_secu: number
    name:string
    lastname:string
    password:string
    mail:string
    phone:number
}

export interface PatientFilterDTO {
    mail: string
}