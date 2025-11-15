import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { StatusResultDTO } from "./status.result-dto";
import { Status } from "./status.model";


@Injectable({
    providedIn: 'root'
})
export class StatusResultAdapter implements ModelAdapter<StatusResultDTO, Status> {

    adapt = (entity: StatusResultDTO): Status => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name
    });

    adaptArray = (entities: StatusResultDTO[]): Status[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}