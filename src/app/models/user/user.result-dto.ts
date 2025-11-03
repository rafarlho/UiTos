import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { OrganizationResultDTO } from "../organization/organization.result-dto";

export interface UserResultDTO extends BaseFieldsDTO {
      fullName: string,
      userName: string,
      email: string,
      latestLogin?: Date,
      organizations?: OrganizationResultDTO[],
}