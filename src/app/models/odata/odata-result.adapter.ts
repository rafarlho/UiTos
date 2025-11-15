import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Odata } from "./odata.model";
import { OdataResultDTO } from "./odata.result-dto";

@Injectable({
    providedIn: 'root'
})
export class OdataResultAdapter<T> implements ModelAdapter<OdataResultDTO<T>, Odata<T>> {
    adapt = (entity: OdataResultDTO<T>): Odata<T> => 
    ({
        Items: entity.items,
        TotalItems: entity.totalItems
    });

    adaptArray = (entities: OdataResultDTO<T>[]): Odata<T>[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}