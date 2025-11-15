import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { OrganizationResultAdapter } from "../organization/organization-result.adapter";
import { MemberResultDTO } from "./member.result-dto";
import { Member } from "./member.model";
import { RoleResultAdapter } from "../role/role-result.adapter";
import { UserResultAdapter } from "../user/user-result.adapter";

@Injectable({
    providedIn: 'root'
})
export class MemberResultAdapter implements ModelAdapter<MemberResultDTO, Member> {

    private readonly injector = inject(Injector)  
    
    private get organizationResultAdapter(): OrganizationResultAdapter { return this.injector.get(OrganizationResultAdapter)} 
    private get roleResultAdapter(): RoleResultAdapter { return this.injector.get(RoleResultAdapter)} 
    private get userResultAdapter(): UserResultAdapter { return this.injector.get(UserResultAdapter)} 

    adapt = (entity: MemberResultDTO): Member => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Organization: this.organizationResultAdapter.adapt(entity.organization),
        Role: this.roleResultAdapter.adapt(entity.role),
        User: this.userResultAdapter.adapt(entity.user),
    });

    adaptArray = (entities: MemberResultDTO[]): Member[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}