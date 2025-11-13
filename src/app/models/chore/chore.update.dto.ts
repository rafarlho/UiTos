import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface ChoreUpdateDTO extends BaseFieldsDTO {
      productionTaskId: number
      productionStationId: number
      productionStationMemberId: number
      taskTypeId: number
      statusId: number
      title: string
      description?:string
      scheduledTo?: Date,
      startedOn?:Date
      finishedOn?: Date
      estimatedDuration?: number
}