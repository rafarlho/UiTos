import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Member } from "./member.model";
import { MemberAddDTO } from "./member.add.dto";


@Injectable({
    providedIn: 'root'
})
export class MemberAddAdapter implements ModelAdapter<Member , MemberAddDTO> {
    adapt = (entity: Member): MemberAddDTO => 
    ({
        organizationId: entity.Organization.Id,
        roleId: entity.Role.Id,
        userId: entity.User.Id
    });

    adaptArray = (entities: Member[]): MemberAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}