import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { RoleResultDTO } from "./role.result-dto";
import { Role } from "./role.model";

@Injectable({
    providedIn: 'root'
})
export class RoleResultAdapter implements ModelAdapter<RoleResultDTO, Role> {

    adapt = (entity: RoleResultDTO): Role => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name
    });

    adaptArray = (entities: RoleResultDTO[]): Role[] => 
        entities.map(entity => this.adapt(entity));
}