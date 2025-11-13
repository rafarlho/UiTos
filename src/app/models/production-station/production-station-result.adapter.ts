import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStationResultDTO } from "./production-station.result-dto";
import { ProductionStation } from "./production-station.model";
import { OrganizationResultAdapter } from "../organization/organization-result.adapter";


@Injectable({
    providedIn: 'root'
})
export class ProductionStationResultAdapter implements ModelAdapter<ProductionStationResultDTO, ProductionStation> {

    private injector = inject(Injector)

    private get OrganizationAdapter(): OrganizationResultAdapter { return this.injector.get(OrganizationResultAdapter) }

    adapt = (entity: ProductionStationResultDTO): ProductionStation => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name,
        Description: entity.description,
        Organization: this.OrganizationAdapter.adapt(entity.organization)
    });

    adaptArray = (entities: ProductionStationResultDTO[]): ProductionStation[] => 
        entities.map(entity => this.adapt(entity));
}