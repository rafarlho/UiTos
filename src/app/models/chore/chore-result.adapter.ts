import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ChoreResultDTO } from "./chore.result-dto";
import { Chore } from "./chore.model";
import { ProductionStationResultAdapter } from "../production-station/production-station-result.adapter";
import { ProductionStationMemberResultAdapter } from "../production-station-member/production-station-member-result.adapter";
import { TaskTypeResultAdapter } from "../task-type/task-type-result.adapter";
import { ProductionTaskResultAdapter } from "../production-task/production-task-result.adapter";
import { StatusResultAdapter } from "../status/status-result.adapter";

@Injectable({
    providedIn: 'root'
})
export class ChoreResultAdapter implements ModelAdapter<ChoreResultDTO, Chore> {

    private readonly injector = inject(Injector)  
    
    private get productionStationResultAdapter(): ProductionStationResultAdapter { return this.injector.get(ProductionStationResultAdapter)} 
    private get productionStationMemberResultAdapter(): ProductionStationMemberResultAdapter { return this.injector.get(ProductionStationMemberResultAdapter)} 
    private get productionTaskResultAdapter(): ProductionTaskResultAdapter { return this.injector.get(ProductionTaskResultAdapter)} 
    private get taskTypeResultAdapter(): TaskTypeResultAdapter { return this.injector.get(TaskTypeResultAdapter)} 
    private get statusResultAdapter(): StatusResultAdapter { return this.injector.get(StatusResultAdapter)} 

    adapt = (entity: ChoreResultDTO): Chore => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        ProductionStation: this.productionStationResultAdapter.adapt(entity.productionStation),
        ProductionStationMember: this.productionStationMemberResultAdapter.adapt(entity.productionStationMember),
        ProductionTask: this.productionTaskResultAdapter.adapt(entity.productionTask),
        TaskType: this.taskTypeResultAdapter.adapt(entity.taskType),
        Status: this.statusResultAdapter.adapt(entity.status),
        Title: entity.title,
        Description: entity.description,
        ScheduledTo: entity.scheduledTo,
        StartedOn: entity.startedOn,
        FinishedOn: entity.finishedOn,
        EstimatedDuration: entity.estimatedDuration
        
    });

    adaptArray = (entities: ChoreResultDTO[]): Chore[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}