import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { ProductionStationMemberResultDTO } from "../production-station-member/production-station-member.result-dto";
import { ProductionStationResultDTO } from "../production-station/production-station.result-dto";
import { ProductionTaskResultDTO } from "../production-task/production-task.result-dto";
import { StatusResultDTO } from "../status/status.result-dto";
import { TaskTypeResultDTO } from "../task-type/task-type.result-dto";

export interface ChoreResultDTO extends BaseFieldsDTO {
      productionTask: ProductionTaskResultDTO
      productionStation: ProductionStationResultDTO,
      productionStationMember: ProductionStationMemberResultDTO
      taskType: TaskTypeResultDTO
      status: StatusResultDTO
      title: string
      description?:string
      scheduledTo?: Date,
      startedOn?:Date
      finishedOn?: Date
      estimatedDuration?: number
}