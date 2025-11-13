import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionTask } from "./production-task.model";
import { ProductionTaskAddDTO } from "./production-task.add.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductionTaskAddAdapter implements ModelAdapter<ProductionTask , ProductionTaskAddDTO> {
    adapt = (entity: ProductionTask): ProductionTaskAddDTO => 
    ({
        createdById: entity.CreatedBy.Id,
        priorityId: entity.Priority.Id
    });

    adaptArray = (entities: ProductionTask[]): ProductionTaskAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}