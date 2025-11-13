import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { OrganizationResultDTO } from "../organization/organization.result-dto";

export interface ProductionStationResultDTO extends BaseFieldsDTO {
      name: string
      organization: OrganizationResultDTO
      description?: string
}