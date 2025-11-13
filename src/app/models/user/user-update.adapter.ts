import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { User } from "./user.model";
import { UserUpdateDTO } from "./user.update.dto";

@Injectable({
    providedIn: 'root'
})
export class UserUpdateAdapter implements ModelAdapter<User, UserUpdateDTO> {
    adapt = (entity: User): UserUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        email: entity.Email,
        fullName: entity.FullName,
        userName: entity.UserName,
    });

    adaptArray = (entities: User[]): UserUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}