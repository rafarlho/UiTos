import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { MemberResultDTO } from "../member/member.result-dto";
import { PriorityResultDTO } from "../priority/priority.result-dto";

export interface ProductionTaskResultDTO extends BaseFieldsDTO {
      createdBy: MemberResultDTO,
      priority:  PriorityResultDTO
}