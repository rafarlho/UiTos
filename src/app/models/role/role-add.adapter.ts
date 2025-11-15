import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Role } from "./role.model";
import { RoleAddDTO } from "./role.add.dto";

@Injectable({
    providedIn: 'root'
})
export class RoleAddAdapter implements ModelAdapter<Role , RoleAddDTO> {
    adapt = (entity: Role): RoleAddDTO => 
    ({
        name: entity.Name
    });

    adaptArray = (entities: Role[]): RoleAddDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}