import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Role } from "./role.model";
import { RoleUpdateDTO } from "./role.update.dto";

@Injectable({
    providedIn: 'root'
})
export class RoleUpdateAdapter implements ModelAdapter<Role, RoleUpdateDTO> {
    adapt = (entity: Role): RoleUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        name: entity.Name
    });

    adaptArray = (entities: Role[]): RoleUpdateDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}