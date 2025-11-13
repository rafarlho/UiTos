import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStationMember } from "./production-station-member.model";
import { ProductionStationMemberAddDTO } from "./production-station-member.add.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductionStationMemberAddAdapter implements ModelAdapter<ProductionStationMember , ProductionStationMemberAddDTO> {
    adapt = (entity: ProductionStationMember): ProductionStationMemberAddDTO => 
    ({
        organizationMemberId: entity.Member.Id,
        productionStationId: entity.ProductionStation.Id
    });

    adaptArray = (entities: ProductionStationMember[]): ProductionStationMemberAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}