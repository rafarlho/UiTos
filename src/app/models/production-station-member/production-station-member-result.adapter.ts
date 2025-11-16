import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStationMember } from "./production-station-member.model";
import { ProductionStationMemberResultDTO } from "./production-station-member.result-dto";
import { MemberResultAdapter } from "../member/member-result.adapter";
import { ProductionStationResultAdapter } from "../production-station/production-station-result.adapter";


@Injectable({
    providedIn: 'root'
})
export class ProductionStationMemberResultAdapter implements ModelAdapter<ProductionStationMemberResultDTO, ProductionStationMember> {

    private injector = inject(Injector)

    private get memberAdapter(): MemberResultAdapter { return this.injector.get(MemberResultAdapter) }
    private get productionStationAdapter(): ProductionStationResultAdapter { return this.injector.get(ProductionStationResultAdapter) }

    adapt = (entity: ProductionStationMemberResultDTO): ProductionStationMember => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Member: entity.organizationMember ? this.memberAdapter.adapt(entity.organizationMember) : entity.organizationMember,
        ProductionStation: entity.productionStation ? this.productionStationAdapter.adapt(entity.productionStation) : entity.productionStation
    });

    adaptArray = (entities: ProductionStationMemberResultDTO[]): ProductionStationMember[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}