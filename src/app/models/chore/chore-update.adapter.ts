import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Chore } from "./chore.model";
import { ChoreUpdateDTO } from "./chore.update.dto";


@Injectable({
    providedIn: 'root'
})
export class ChoreUpdateAdapter implements ModelAdapter<Chore, ChoreUpdateDTO> {
    adapt = (entity: Chore): ChoreUpdateDTO => 
    ({
        id: entity.Id,
        dbCreatedOn: entity.DbCreatedOn,
        dbStatus: entity.DbStatus,
        rowVersion: entity.RowVersion,
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

    adaptArray = (entities: Chore[]): ChoreUpdateDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}