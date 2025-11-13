import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionStation } from "./production-station.model";
import { ProductionStationAddDTO } from "./production-station.add.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductionStationAddAdapter implements ModelAdapter<ProductionStation , ProductionStationAddDTO> {
    adapt = (entity: ProductionStation): ProductionStationAddDTO => 
    ({
        name: entity.Name,
        organizationId: entity.Organization.Id,
        description: entity.Description
    });

    adaptArray = (entities: ProductionStation[]): ProductionStationAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}