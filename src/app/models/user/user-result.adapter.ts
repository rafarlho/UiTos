import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { User } from "./user.model";
import { UserResultDTO } from "./user.result-dto";
import { OrganizationResultAdapter } from "../organization/organization-result.adapter";

@Injectable({
    providedIn: 'root'
})
export class UserResultAdapter implements ModelAdapter<UserResultDTO, User> {

    private readonly injector = inject(Injector)  
    
    private get organizationResultAdapter(): OrganizationResultAdapter { return this.injector.get(OrganizationResultAdapter)} 

    adapt = (entity: UserResultDTO): User => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Email: entity.email,
        FullName: entity.fullName,
        UserName: entity.userName,
        LatestLogin: entity.latestLogin,
        Organizations: entity.organizations ? this.organizationResultAdapter.adaptArray(entity.organizations): []
    });

    adaptArray = (entities: UserResultDTO[]): User[] => 
        entities.map(entity => this.adapt(entity));
}