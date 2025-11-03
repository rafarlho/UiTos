import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Organization } from "./organization.model";
import { OrganizationResultDTO } from "./organization.result-dto";
import { UserResultAdapter } from "../user/user-result.adapter";

@Injectable({
    providedIn: 'root'
})
export class OrganizationResultAdapter implements ModelAdapter<OrganizationResultDTO, Organization> {

    private readonly injector = inject(Injector)  
    
    private get userResultAdapter():UserResultAdapter { return this.injector.get(UserResultAdapter)} 

    adapt = (entity: OrganizationResultDTO): Organization => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Description: entity.description,
        Location: entity.location,
        Owner: entity.owner ? this.userResultAdapter.adapt(entity.owner) : undefined,
        Name: entity.name
    });

    adaptArray = (entities: OrganizationResultDTO[]): Organization[] => 
        entities.map(entity => this.adapt(entity));
}