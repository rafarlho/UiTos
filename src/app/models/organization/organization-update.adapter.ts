import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Organization } from "./organization.model";
import { OrganizationUpdateDTO } from "./organization.update.dto";


@Injectable({
    providedIn: 'root'
})
export class OrganizationUpdateAdapter implements ModelAdapter<Organization, OrganizationUpdateDTO> {
    adapt = (entity: Organization): OrganizationUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        description: entity.Description,
        location: entity.Location,
        ownerId: entity.Owner?.Id,
        name: entity.Name
    });

    adaptArray = (entities: Organization[]): OrganizationUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}