import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Organization } from "./organization.model";
import { OrganizationAddDTO } from "./organization.add.dto";

@Injectable({
    providedIn: 'root'
})
export class OrganizationAddAdapter implements ModelAdapter<Organization, OrganizationAddDTO> {
    adapt = (entity: Organization): OrganizationAddDTO => 
    ({
        description: entity.Description,
        location: entity.Location,
        ownerId: entity.Owner?.Id,
        name: entity.Name
    });

    adaptArray = (entities: Organization[]): OrganizationAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}   