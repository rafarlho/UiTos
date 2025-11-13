import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Member } from "./member.model";
import { MemberUpdateDTO } from "./member.update.dto";


@Injectable({
    providedIn: 'root'
})
export class MemberUpdateAdapter implements ModelAdapter<Member, MemberUpdateDTO> {
    adapt = (entity: Member): MemberUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        organizationId: entity.Organization.Id,
        roleId: entity.Role.Id,
        userId: entity.User.Id
    });

    adaptArray = (entities: Member[]): MemberUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}