import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStation } from "./production-station.model";
import { ProductionStationUpdateDTO } from "./production-station.update.dto";


@Injectable({
    providedIn: 'root'
})
export class ProductionStationUpdateAdapter implements ModelAdapter<ProductionStation, ProductionStationUpdateDTO> {
    adapt = (entity: ProductionStation): ProductionStationUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        name: entity.Name,
        organizationId: entity.Organization!.Id,
        description: entity.Description

    });

    adaptArray = (entities: ProductionStation[]): ProductionStationUpdateDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}