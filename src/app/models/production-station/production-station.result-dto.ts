import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { OrganizationResultDTO } from "../organization/organization.result-dto";
import { ProductionStationMemberResultDTO } from "../production-station-member/production-station-member.result-dto";

export interface ProductionStationResultDTO extends BaseFieldsDTO {
      name: string
      organization?: OrganizationResultDTO
      description?: string
      members: ProductionStationMemberResultDTO[]
}