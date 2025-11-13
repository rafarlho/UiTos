import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Chore } from "./chore.model";
import { ChoreAddDTO } from "./chore.add.dto";


@Injectable({
    providedIn: 'root'
})
export class ChoreAddAdapter implements ModelAdapter<Chore , ChoreAddDTO> {
    adapt = (entity: Chore): ChoreAddDTO => 
    ({
        productionTaskId: entity.ProductionStation.Id ,
        productionStationId: entity.ProductionStation.Id ,
        productionStationMemberId: entity.ProductionStationMember.Id ,
        taskTypeId: entity.TaskType.Id ,
        statusId: entity.Status.Id ,
        title: entity.Title ,
        description: entity.Description ,
        scheduledTo: entity.ScheduledTo ,
        startedOn: entity.StartedOn ,
        finishedOn: entity.FinishedOn ,
        estimatedDuration: entity.EstimatedDuration ,
    });

    adaptArray = (entities: Chore[]): ChoreAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}