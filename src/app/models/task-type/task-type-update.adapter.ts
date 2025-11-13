import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { TaskType } from "./task-type.model";
import { TaskTypeUpdateDTO } from "./task-type.update.dto";

@Injectable({
    providedIn: 'root'
})
export class TaskTypeUpdateAdapter implements ModelAdapter<TaskType, TaskTypeUpdateDTO> {
    adapt = (entity: TaskType): TaskTypeUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        name: entity.Name
    });

    adaptArray = (entities: TaskType[]): TaskTypeUpdateDTO[] => 
        entities.map(entity => this.adapt(entity));
}