import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStationMember } from "./production-station-member.model";
import { ProductionStationMemberUpdateDTO } from "./production-station-member.update.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductionStationMemberUpdateAdapter implements ModelAdapter<ProductionStationMember, ProductionStationMemberUpdateDTO> {
    adapt = (entity: ProductionStationMember): ProductionStationMemberUpdateDTO => 
    ({  
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        organizationMemberId: entity.Member.Id,
        productionStationId: entity.ProductionStation.Id
    });

    adaptArray = (entities: ProductionStationMember[]): ProductionStationMemberUpdateDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}