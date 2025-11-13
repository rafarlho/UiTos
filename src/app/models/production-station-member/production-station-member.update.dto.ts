import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface ProductionStationMemberUpdateDTO extends BaseFieldsDTO {
      productionStationId: number,
      organizationMemberId: number
}