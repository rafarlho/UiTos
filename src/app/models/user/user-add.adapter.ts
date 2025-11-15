import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { User } from "./user.model";
import { UserAddDTO } from "./user.add.dto";


@Injectable({
    providedIn: 'root'
})
export class UserAddAdapter implements ModelAdapter<User , UserAddDTO> {
    adapt = (entity: User): UserAddDTO => 
    ({
        email: entity.Email,
        fullName: entity.FullName,
        userName: entity.UserName,
    });

    adaptArray = (entities: User[]): UserAddDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}