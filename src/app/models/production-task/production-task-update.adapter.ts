import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionTask } from "./production-task.model";
import { ProductionTaskUpdateDTO } from "./production-task.update.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductionTaskUpdateAdapter implements ModelAdapter<ProductionTask, ProductionTaskUpdateDTO> {
    adapt = (entity: ProductionTask): ProductionTaskUpdateDTO => 
    ({  
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
        createdById: entity.CreatedBy.Id,
        priorityId: entity.Priority.Id
    });

    adaptArray = (entities: ProductionTask[]): ProductionTaskUpdateDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}