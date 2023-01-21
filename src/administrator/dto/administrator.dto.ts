export interface AdministratorDTO {
    id_user?: number
    email_contact: string
    praticien: boolean
}

export interface AdministratorUserDTO {
    id_user?:number
    email_contact:string
    praticien:boolean
    name:string
    lastname:string
    password:string
    mail:string
    phone:number
}

export interface AdministratorFilterDTO {
    mail: string
}