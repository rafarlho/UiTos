import { inject, Injectable, Injector } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { ProductionTask } from "./production-task.model";
import { ProductionTaskResultDTO } from "./production-task.result-dto";
import { MemberResultAdapter } from "../member/member-result.adapter";
import { PriorityResultAdapter } from "../priority/priority-result.adapter";


@Injectable({
    providedIn: 'root'
})
export class ProductionTaskResultAdapter implements ModelAdapter<ProductionTaskResultDTO, ProductionTask> {

    private injector = inject(Injector)

    private get memberAdapter(): MemberResultAdapter { return this.injector.get(MemberResultAdapter) }
    private get priorityAdapter(): PriorityResultAdapter { return this.injector.get(PriorityResultAdapter) }

    adapt = (entity: ProductionTaskResultDTO): ProductionTask => 
    ({
        Id: entity.id,
        DbCreatedOn: entity.dbCreatedOn,
        DbStatus: entity.dbStatus,
        RowVersion: entity.rowVersion,
        Chores : [],
        Priority: this.priorityAdapter.adapt(entity.priority),
        CreatedBy: this.memberAdapter.adapt(entity.createdBy)
    });

    adaptArray = (entities: ProductionTaskResultDTO[]): ProductionTask[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}