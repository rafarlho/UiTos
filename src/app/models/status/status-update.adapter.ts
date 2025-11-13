import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Status } from "./status.model";
import { StatusUpdateDTO } from "./status.update.dto";

@Injectable({
    providedIn: 'root'
})
export class StatusUpdateAdapter implements ModelAdapter<Status, StatusUpdateDTO> {
    adapt = (entity: Status): StatusUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        name: entity.Name
    });

    adaptArray = (entities: Status[]): StatusUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}