import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Priority } from "./priority.model";
import { PriorityUpdateDTO } from "./priority.update.dto";


@Injectable({
    providedIn: 'root'
})
export class PriorityUpdateAdapter implements ModelAdapter<Priority, PriorityUpdateDTO> {
    adapt = (entity: Priority): PriorityUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        name: entity.Name
    });

    adaptArray = (entities: Priority[]): PriorityUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}