import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { TaskTypeResultDTO } from "./task-type.result-dto";
import { TaskType } from "./task-type.model";


@Injectable({
    providedIn: 'root'
})
export class TaskTypeResultAdapter implements ModelAdapter<TaskTypeResultDTO, TaskType> {

    adapt = (entity: TaskTypeResultDTO): TaskType => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Name: entity.name
    });

    adaptArray = (entities: TaskTypeResultDTO[]): TaskType[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}