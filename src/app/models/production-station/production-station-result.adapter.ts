import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStationResultDTO } from "./production-station.result-dto";
import { ProductionStation } from "./production-station.model";
import { OrganizationResultAdapter } from "../organization/organization-result.adapter";
import { ProductionStationMemberResultAdapter } from "../production-station-member/production-station-member-result.adapter";


@Injectable({
    providedIn: 'root'
})
export class ProductionStationResultAdapter implements ModelAdapter<ProductionStationResultDTO, ProductionStation> {

    private injector = inject(Injector)

    private get organizationAdapter(): OrganizationResultAdapter { return this.injector.get(OrganizationResultAdapter) }
    private get productionStationMemberAdapter(): ProductionStationMemberResultAdapter { return this.injector.get(ProductionStationMemberResultAdapter) }

    adapt = (entity: ProductionStationResultDTO): ProductionStation => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name,
        Description: entity.description,
        Organization: entity.organization ? this.organizationAdapter.adapt(entity.organization) : entity.organization,
        Members: this.productionStationMemberAdapter.adaptArray(entity.members)
    });

    adaptArray = (entities: ProductionStationResultDTO[]): ProductionStation[] => 
        entities ? entities.map(entity => this.adapt(entity)) : [];
}