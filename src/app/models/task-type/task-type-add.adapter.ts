import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { TaskType } from "./task-type.model";
import { TaskTypeAddDTO } from "./task-type.add.dto";

@Injectable({
    providedIn: 'root'
})
export class TaskTypeAddAdapter implements ModelAdapter<TaskType , TaskTypeAddDTO> {
    adapt = (entity: TaskType): TaskTypeAddDTO => 
    ({
        name: entity.Name
    });

    adaptArray = (entities: TaskType[]): TaskTypeAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}