import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { PriorityResultDTO } from "./priority.result-dto";
import { Priority } from "./priority.model";


@Injectable({
    providedIn: 'root'
})
export class PriorityResultAdapter implements ModelAdapter<PriorityResultDTO, Priority> {

    adapt = (entity: PriorityResultDTO): Priority => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name
    });

    adaptArray = (entities: PriorityResultDTO[]): Priority[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}