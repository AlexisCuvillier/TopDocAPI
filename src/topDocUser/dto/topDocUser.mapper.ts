import { TopDocUserDAO } from "../data/topDocUser.dao";
import { TopDocUserDTO } from "./topDocUser.dto";

export class TopDocUserMapper {
    static mapToDto(topDocUser: TopDocUserDAO) : TopDocUserDTO {
        const dto : TopDocUserDTO = {
            name: topDocUser.name,
            lastname: topDocUser.lastname,
            password: topDocUser.password,
            phone: topDocUser.phone,
            mail: topDocUser.mail
        }
        return dto;
    }
}