import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface ProductionTaskUpdateDTO extends BaseFieldsDTO {
      createdById: number,
      priorityId: number
}